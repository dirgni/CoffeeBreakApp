package ee.ut.vrl.server;

import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.*;
import java.io.*; 

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;
//import org.json.JSONArray;
//import org.json.JSONObject;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

public class otsiPiirkondServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			
			response.setContentType("application/json");
		  	PrintWriter out = response.getWriter();
		  	Connection c = null;
			Gson gson = new Gson();
		  	
		  	try {
				String searchRegion = request.getParameter("searchReg");
				//String searchParty = request.getParameter("searchEra");
				DriverManager.registerDriver(new AppEngineDriver());
				c = DriverManager.getConnection("jdbc:google:rdbms://coffeebreak2013vrlsql:andmebaas/valimised");
				ResultSet rs = c.createStatement().executeQuery("SELECT id, personid, personname, regionid, regionname, partyid, partyname, votes FROM kandidaadid WHERE regionname='"+searchRegion+"' ORDER BY personname");

				ArrayList<Candidate> candidates = new ArrayList<Candidate>();
				
				while (rs.next()){
					Candidate candidate = new Candidate();
				    candidate.setId(rs.getString("id"));
				    Person person = new Person(rs.getString("personid"), rs.getString("personname"));
				    candidate.setPerson(person);
				    Region region = new Region(rs.getString("regionid"), rs.getString("regionname"));
				    candidate.setRegion(region);
				    Party party = new Party(rs.getString("partyid"), rs.getString("partyname"));
				    candidate.setParty(party);
				    candidate.setVotes(rs.getInt("votes"));
				    candidates.add(candidate);
				}
				
				//if (candidates.size() != 0){
				String json = gson.toJson(candidates);
				out.print(json);
				out.flush();
				//}
			
			}catch (SQLException e) {
		        e.printStackTrace();
			}finally {
				out.close();
				if (c != null) 
		        	try {
		        		c.close();
			        }catch (SQLException ignore) { 
			        }
			}
		
	}	
	

}

