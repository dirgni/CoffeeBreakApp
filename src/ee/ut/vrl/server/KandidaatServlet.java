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

public class KandidaatServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			
			response.setContentType("text/html; charset=UTF-8");
		  	PrintWriter out = response.getWriter();
		  	Connection c = null;
		  	
		  	try {
				DriverManager.registerDriver(new AppEngineDriver());
				c = DriverManager.getConnection("jdbc:google:rdbms://coffeebreak2013vrlsql:andmebaas/kandidaadid");
				ResultSet rs = c.createStatement().executeQuery("SELECT id, personid, personname, regionid, regionname, partyid, partyname, votes FROM kandidaadid");
				Gson gson = new Gson();
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

				String json = gson.toJson(candidates);
				out.print("<!DOCTYPE html>\n" +  "<html>\n" + 
						"<head></head>\n" + "<body>\n" + 
						"<p>333</p>\n" + json + "</body>\n</html>");
				out.flush();
			
			}catch (SQLException e) {
		        e.printStackTrace();

			}finally {
				if (c != null) 
		        	try {
		        		c.close();
			        }catch (SQLException ignore) { 
			        }
			}
		
	}	
	
	/*public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			doGet(request, response);
	}*/

	public static class Candidates implements Serializable{
		private static final long serialVersionUID = 1L;
		private ArrayList<Candidate> candidates;
		
		public Candidates(ArrayList<Candidate> candidates){
			this.candidates = candidates;
		}

		public List<Candidate> getCandidates() {
			return candidates;
		}

		public void setCandidates(ArrayList<Candidate> candidates) {
			this.candidates = candidates;
		}
				
	}

	public static class Candidate{
		//private static final long serialVersionUID = 1L;
		private String id;
		private Party party;
		private Person person;
		private Region region;
		private int votes;
		
		public Candidate(){
			this.id = "0";
			this.party = new Party("", "");
			this.person = new Person("", "");
			this.region = new Region("", "");
			this.votes = 0;
		}

		public Candidate(String id, Party party, Person person, Region region) {
			super();
			this.id = id;
			this.party = party;
			this.person = person;
			this.region = region;
			this.votes = 0;
		}

		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public Party getParty() {
			return party;
		}
		public void setParty(Party party) {
			this.party = party;
		}
		public Person getPerson() {
			return person;
		}
		public void setPerson(Person person) {
			this.person = person;
		}
		public Region getRegion() {
			return region;
		}
		public void setRegion(Region region) {
			this.region = region;
		}
		public int getVotes() {
			return votes;
		}
		public void setVotes(int votes) {
			this.votes = votes;
		}		
		public void setVotes() {
			this.votes += 1;
		}

	}

	public static class Party{
		private String id;	
		private String name;

		public Party(String id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
	}

	
	public static class Person{
		private String id;	
		private String name;

		public Person(String id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
	}
	
	public static class Region{
		private String id;	
		private String name;

		public Region(String id, String name) {
			super();
			this.id = id;
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
	}
	
}

