<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="com.google.appengine.api.rdbms.AppEngineDriver" %>

<html>


  <body>

<%
Connection c = null;
c = DriverManager.getConnection("jdbc:google:rdbms://coffeebreak2013vrlsql:andmebaas/kandidaadid");
ResultSet rs = c.createStatement().executeQuery("SELECT id, personid, personname, partyid, partyname, regionid, regionname, votes FROM kandidaadid"); %>

<table style="border: 1px solid black">
<tbody>
<tr>
<th width="35%" style="background-color: #CCFFCC; margin: 5px">ID</th>
<th style="background-color: #CCFFCC; margin: 5px">Person</th>
<th style="background-color: #CCFFCC; margin: 5px">Party</th>
<th style="background-color: #CCFFCC; margin: 5px">Region</th>
<th style="background-color: #CCFFCC; margin: 5px">Votes</th>
</tr> <%
while (rs.next()){
    String id = rs.getString("id");
    String personname = rs.getString("personname");
    String partyname = rs.getString("partyname");
    String regionname = rs.getString("regionname");
    int votes = rs.getInt("votes"); %>

<tr>
<td><%= id %></td>
<td><%= personname %></td>
<td><%= partyname %></td>
<td><%= regionname %></td>
<td><%= votes %></td>
</tr>

<% }
c.close(); %>

</tbody>
</table>
<br />
No more messages!
<p><strong>Sign the guestbook!</strong></p>
<form action="/sign" method="post">
    <div>First Name: <input type="text" name="fname"></input></div>
    <div>Message:
    <br /><textarea name="content" rows="3" cols="60"></textarea>
    </div>
    <div><input type="submit" value="Post Greeting" /></div>
    <input type="hidden" name="guestbookName" />
  </form>
  </body>
</html>