package ee.ut.vrl.server;

//import ee.ut.vrl.server.Party;
//import ee.ut.vrl.server.Person;
//import ee.ut.vrl.server.Region;

public class Candidate{
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