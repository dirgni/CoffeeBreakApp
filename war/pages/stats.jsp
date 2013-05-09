
<script>
// google.maps.event.addDomListener(window, 'load', initialize); 
</script>
<div class="toparea">
    <!-- <img id="est_picture" src="graafika/Eesti_kaart.png"
         alt="Siin peaks olema valimisstatistika graafid kaartil"> -->
    <div id="googleMap" style="width:600px;height:425px;"></div>
</div><!-- End toparea -->

<div class="contentarea">

<!--     <div class="diagramm">
        <form>
            <input class="button5" type="button" id="piirkond_diagramm"
                   value="Kuva diagramm">
        </form> -->


    </div>

	<input id="piirkond_search" placeholder="Otsi.." id="region">	
	<form id="searchPiirkond" method="get">
		<table class="search_form">
			<tr>
				<td><select id="searchReg">
						<option value="default" selected="selected">- Maakond -</option>
						<option value="Harjumaa">Harjumaa</option>
						<option value="Hiiumaa">Hiiumaa</option>
						<option value="Ida-Virumaa">Ida-Virumaa</option>
						<option value="Jıgeva maakond">Jıgevamaa</option>
						<option value="J‰rva maakond">J‰rvamaa</option>
						<option value="L‰‰ne maakond">L‰‰nemaa</option>
						<option value="L‰‰ne-Viru maakond">L‰‰ne-Virumaa</option>
						<option value="Pılva maakond">Pılvamaa</option>
						<option value="P‰rnumaa">P‰rnumaa</option>
						<option value="Raplamaa">Raplamaa</option>
						<option value="Saaremaa">Saaremaa</option>
						<option value="Tartumaa">Tartumaa</option>
						<option value="Valga maakond">Valgamaa</option>
						<option value="Viljandi maakond">Viljandimaa</option>
						<option value="Vırumaa">Vırumaa</option>
					</select>
				</td>
				<td>
					<input type="submit" class="buttonss" value="Otsi" id="sButtonPiirkond">
				</td>
			</tr>
		</table>
	</form>
	<form id="searchErakond" method="get">
        <table class="search_form">
            <tr>
                <td><select id="searchEra">
                        <option value="default" selected="selected">- Partei -</option>
                        <option value="VOT">VOT</option>
                        <option value="Puukesed">Puukesed</option>
                        <option value="V√µpsikud">V√µpsikud</option>
                        <option value="Kuusekesed">Kuusekesed</option>
                        <option value="Randomness">Randomness</option>
                    </select>
                </td>
                <td>
                    <input type="submit" class="buttonss" value="Otsi" id="sButtonErakond">
                </td>
            </tr>
        </table>
    </form><br>
   <table id="piirkond_table" class="sortable">
         <tr>
            <th>Nimi</th>
            <th>Piirkond</th>
            <th>Partei</th>
            <th>H√§√§lte arv</th>
        </tr>
  <!--       <tr>
            <td>Mari Maasikas</td>
            <td>Kohtla-J√§rve</td>
            <td>V√µpsikud</td>
            <td>126</td>
        </tr>
        <tr>
            <td>Tauri Tamm</td>
            <td>Keila</td>
            <td>Puukesed</td>
            <td>456</td>
        </tr>
        <tr>
            <td>Janno J√µgi</td>
            <td>Tartu</td>
            <td>Kuusekesed</td>
            <td>254</td>
        </tr>
        <tr>
            <td>Meeri Mets</td>
            <td>Rapla</td>
            <td>VOT</td>
            <td>1265</td>
        </tr>
        <tr>
            <td>Kalle Kask</td>
            <td>V√µru</td>
            <td>Puukesed</td>
            <td>852</td>
        </tr>
        <tr>
            <td>Toomas Toomingas</td>
            <td>P√§rnu</td>
            <td>Randomness</td>
            <td>111</td>
        </tr> -->
    </table> 
</div>


<script src="js/sorttable.js"></script>
<script src="js/ajax.js"></script>