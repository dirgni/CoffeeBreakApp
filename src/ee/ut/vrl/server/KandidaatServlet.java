package ee.ut.vrl.server;

import java.util.*;
import java.io.*; 

import javax.servlet.*;
import javax.servlet.http.*;

public class KandidaatServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	//new gson;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)

		throws ServletException, IOException {

			//			Candidates()mingi = new Candidates;
			//		String partyname = request.;
			//
			//		//todo get data from database
			//		List<Candidate> candidates = new ArrayList();
			//		Candidate c1 = new Candidate();
			//		c1.setID("352");
			//		c1.setParty(new Party("REF", "reformierak"));
			//...
			//		candidates.add(c1);		
			//
			//			
			//
			//		String tagasi = gson.toJson(candidates);
			//		
			//		try {
			//			response.getwriter().write(tagasi)
			//		}catch (IO{
			//			e.
			
		
	}



	Candidates c = new Candidates();

	public static class Candidates implements Serializable{

		private List<Candidate> candidates;



	}

	public static class Candidate{
		private static final long serialVersionUID = 1L;
		private String id;
		private Party party;
		private Person person;

		public Candidate(String id, Party party, Person person) {
			super();
			this.id = id;
			this.party = party;
			this.person = person;
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
	
}

