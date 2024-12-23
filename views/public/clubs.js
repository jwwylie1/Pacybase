const clubs = [
    ['Arsenal','Aston Villa','AFC Bournemouth','Brentford','Brighton','Chelsea','Crystal Palace','Everton','Fulham','Ipswich','Leicester City','Liverpool','Manchester City','Manchester Utd','Newcastle Utd',"Nottm Forest",'Southampton','Spurs','West Ham','Wolves'],
    ['Athletic Club','Atlético de Madrid','FC Barcelona','CD Leganés','RC Celta','D. Alavés','RCD Espanyol','Getafe CF','Girona FC','UD Las Palmas','RCD Mallorca','CA Osasuna','Rayo Vallecano','Real Betis','Real Madrid','Real Sociedad','Sevilla FC','Valencia CF','R. Valladolid CF','Villarreal CF'],
    ['Bergamo Calcio','Bologna','Cagliari','Como','Empoli','Fiorentina','Genoa','Hellas Verona','Juventus','Latium','Lecce','Lombardia FC','Milano FC','Monza','SSC Napoli','Parma','AS Roma','Torino','Udinese','Venezia'],
    ['FC Augsburg','FC Bayern München','VfL Bochum 1848','Borussia Dortmund','Frankfurt','SC Freiburg','Heidenheim','Holstein Kiel','Leverkusen','Mgladbach','1. FSV Mainz 05','RB Leipzig','FC St. Pauli','VfB Stuttgart','TSG Hoffenheim','Union Berlin','SV Werder Bremen','VfL Wolfsburg'],
    ['AS Saint-Étienne','Angers SCO','AJ Auxerre','Stade Brestois 29','Havre AC','RC Lens','LOSC Lille','AS Monaco','Montpellier','FC Nantes','OGC Nice','OL','OM','PSG','Stade de Reims','Stade Rennais FC','Strasbourg','Toulouse FC'],
    ['Icons'],
    ['RSC Anderlecht','Cercle Brugge','FCV Dender EH','KRC Genk','KAA Gent','K. Beerschot VA','KV Kortrijk','KV Mechelen','KVC Westerlo','OH Leuven','R. Union St.-G.','Royal Antwerp FC','STVV','Sp. Charleroi','Standard Liège'],
    ['1860 München','Aleman. Aachen','Arminia Bielefeld','B. Dortmund II','Dynamo Dresden','Energie Cottbus','FC Erzgebirge Aue','Hannover 96 II','FC Hansa Rostock','FC Ingolstadt 04','VfL Osnabrück','Rot-Weiss Essen','Saarbrücken','SV Sandhausen','Unterhaching','SC Verl','VfB Stuttgart II','Viktoria Köln','SV Waldhof','Wehen Wiesbaden'],
    ['AGF','AaB','Brøndby IF','F.C. København','Lyngby BK','FC Midtjylland','FC Nordsjælland','Randers FC','Silkeborg IF','Sønderjyske','Vejle Boldklub','Viborg FF'],
    ['Adelaide United','Auckland FC','Brisbane Roar','Central Coast','Macarthur','Melb. Victory','Melbourne City','Newcastle Jets','Perth Glory','Sydney','WS Wanderers','Well. Phoenix','Western United'],
    ['AIK','Brommapojkarna','Djurgårdens IF','IF Elfsborg','GAIS','IFK Göteborg','Halmstads','Hammarby','BK Häcken','IK Sirius','Kalmar FF','Malmö FF','Mjällby AIF','IFK Norrköping','IFK Värnamo','Västerås SK'],
    ['Braunschweig','SV Darmstadt 98','Düsseldorf','SV Elversberg','Fürth','Hamburger SV','Hannover 96','Hertha Berlin','Jahn Regensburg','Kaiserslautern','Karlsruher SC','1. FC Köln','1. FC Magdeburg','1. FC Nürnberg','SC Paderborn 07','Preußen Münster','FC Schalke 04','SSV Ulm 1846'],
    ['Beijing FC','Cangzhou FC','Changchun Yatai','Henan FC','Meizhou Hakka FC','Nantong Zhiyun','Qingdao Hainiu','Qingdao W. Coast','Rongcheng FC','SZ Peng City','Shandong Taishan','Shanghai Port FC','Shanghai Shenhua','Tianjin JMT FC','Wuhan Three Towns','Zhejiang Pro'],
    ['FC Basel 1893','FC Sion','Grasshopper Club','Lausanne-Sport','FC Lugano','FC Luzern','Servette FC','FC St. Gallen','FC Winterthur','BSC Young Boys','Yverdon Sport FC','FC Zürich'],
    ['AZ','Almelo','Almere','Deventer CF','Eindhoven Reds','FC North','Heerenveen','Goffert FC','Breda FC','CF Waalwijk','Rotterdam OG','Rotterdam South','SC Amsterdam','Sittard FC','Twente','Utrecht','FC Tilburg','Zwolle Blues'],
    ['Blackburn Rovers','Bristol City','Burnley','Cardiff City','Coventry City','Derby County','Hull City','Leeds United','Luton Town','Middlesbrough','Millwall','Norwich','Oxford United','Plymouth Argyle','Portsmouth','Preston','QPR','Sheffield Utd','Sheffield Wed','Stoke City','Sunderland','Swansea City','Watford','West Brom'],
    ['Barnsley','Birmingham City','Blackpool','Bolton','Bristol Rovers','Burton Albion','Cambridge Utd','Charlton Ath','Crawley Town','Exeter City','Huddersfield','Leyton Orient','Lincoln City','Mansfield Town','Northampton','Peterborough','Reading','Rotherham Utd','Shrewsbury','Stevenage','Stockport','Wigan Athletic','Wrexham','Wycombe'],
    ['Accrington','Barrow','Bradford City','Bromley FC','Carlisle United','Cheltenham Town','Chesterfield','Colchester','Crewe Alexandra','Doncaster','Fleetwood Town','Gillingham','Grimsby Town','Harrogate Town','MK Dons','Morecambe','Newport County','Notts County','Port Vale','Salford City','Swindon Town','Tranmere Rovers','Walsall','AFC Wimbledon'],
    ['Cracovia','GKS Katowice','Górnik Zabrze','Jagiellonia','Korona Kielce','Lech Poznań','Lechia Gdańsk','Legia Warszawa','Motor Lublin','Piast Gliwice','Pogoń Szczecin','Puszcza','Radomiak Radom','Raków','Stal Mielec','Widzew Łódź','Zaglębie Lubin','Śląsk Wrocław'],
    ['FK Bodø Glimt','SK Brann','Fredrikstad FK','HamKam Fotball','FK Haugesund','KFUM-Kameratene','Kristiansund BK','Lillestrøm SK','Molde FK','Odds BK','Rosenborg','Sandefjord','Sarpsborg 08','Strømsgodset IF','Tromsø IL','Viking FK'],
    ['HJK Helsinki'],
    ['AEK Athens','Olympiacos FC','PAOK FC','Panathinaikos'],
    ['Mohun Bagan SG','Bengaluru FC','Chennaiyin FC','East Bengal','Goa FC','Hyderabad','Jamshedpur','Kerala Blasters','Mohammedan SC','Mumbai City','NorthEast United','Odisha','Punjab FC'],
    ['Daegu FC','Daejeon','Gangwon FC','Gimcheon Sangmu','GwangJu FC','Incheon United','Jeju United','Jeonbuk Hyundai','Pohang Steelers','FC Seoul','Suwon FC','Ulsan Hyundai'],
    ['Atlético Tucumán','Banfield','Barracas Central','Central Córdoba','Dep. Riestra','Gimnasia','Godoy Cruz','Huracán','Ind. Rivadavia','Independiente','Instituto','Newells','Platense','Sarmiento','Tigre','Unión','Vélez Sarsfield'],
    ['Albacete BP','Burgos CF','CD Castellón','CD Eldense','CD Mirandés','FC Cartagena','Cádiz CF','Córdoba CF','SD Eibar','Elche CF','Granada CF','Levante UD','Málaga CF','R. Oviedo','RC Deportivo','R. Racing Club','Racing de Ferrol','R. Sporting','Real Zaragoza','SD Huesca','CD Tenerife','UD Almería'],
    ['Alianza Lima','Atlético Mineiro','Barcelona SC','Bolívar','Botafogo','Caracas FC','Cerro Porteño','Cobresal','Colo-Colo','Dep. Táchira','Estudiantes','Flamengo','Fluminense','Huachipato','Independiente DV','Junior','LDU Quito','Libertad','Liverpool','Millonarios','Nacional','Palestino','Palmeiras','Peñarol','River Plate','Rosario Central','San Lorenzo','São Paulo','Talleres','The Strongest','Universitario'],
    ['Qarabağ FK'],
    ['Atl. Nacional'],
    ['APOEL FC'],
    ['Dinamo Zagreb','Hajduk Split'],
    ['AVS Futebol SAD','Arouca','SL Benfica','Boavista FC','SC Braga','Casa Pia AC','Estoril Praia','Estrela Amadora','FC Famalicão','Farense','Gil Vicente','Moreirense FC','Nacional','FC Porto','Rio Ave FC','Santa Clara','Sporting CP','Vitória SC'],
    ['AC Ajaccio','Amiens SC','FC Annecy','SC Bastia','SM Caen','Clermont Foot 63','ESTAC Troyes','FC Martigues','Grenoble Foot 38','En Avant Guingamp','Stade Lavallois','FC Lorient','FC Metz','Paris FC','Pau FC','Red Star FC','Rodez AF','USL Dunkerque'],
    ['Atlanta United','Austin FC','CF Montréal','Charlotte FC','Chicago Fire FC','FC Cincinnati','Colorado Rapids','Columbus Crew','D.C. United','FC Dallas','Houston Dynamo','Inter Miami CF','LA Galaxy','LAFC','Minnesota United','Nashville SC','New England','New York City FC','Orlando City','Philadelphia','Portland Timbers','Real Salt Lake','Red Bulls','SJ Earthquakes','Sounders FC','Sporting KC','St. Louis CITY SC','Toronto FC','Whitecaps FC'],
    ['Ferencvárosi TC'],
    ['FC Botoșani','CFR 1907 Cluj','FC Dinamo 1948','FC Gloria Buzău','FCSB','Farul Constanța','FC Hermannstadt','SC Oțelul Galați','FC Petrolul','Politehnica Iași','FC Rapid 1923','Sepsi OSK','UTA Arad','Unirea Slobozia','FC Univ. Cluj','Univ. Craiova'],
    ['Bohemian FC','Derry City','Drogheda United','Dundalk','Galway United','Shamrock Rovers','Shelbourne','Sligo Rovers','St. Pats','Waterford'],
    ['Al Ahli','Al Fateh','Al Fayha','Al Hilal','Al Ittihad','Al Khaleej','Al Nassr','Al Okhdood','Al Orobah','Al Qadisiyah','Al Raed','Al Riyadh','Al Shabab','Al Taawoun','Al Wehda','Damac FC','Ettifaq FC'],
    ['Aberdeen','Celtic','Dundee FC','Dundee United','Hearts','Hibernian','Kilmarnock','Motherwell','Rangers','Ross County','St. Johnstone','St. Mirren'],
    ['Bari','Brisigonza','Carrarese Calcio','Catanzaro','Cesena','Cittadella','Cosenza','Cremonese','Frosinone','Mantova','Modena','Palermo','Pisa','Reggiana','SS Juve Stabia','Salernitana','Sampdoria','Sassuolo','Spezia','Südtirol'],
    ['ADT','Alianza FC','Always Ready','América de Cali','Argentinos Jrs.','Athletico-PR','Belgrano','Boca Juniors','Carabobo FC','Cerro Largo','Club Nacional','Coquimbo Unido','Corinthians','Danubio','Defensa','Delfín S.C.','Dep. Cuenca','Dep. Garcilaso','Dep. La Guaira','Deportes Tolima','Everton','Fortaleza','Guaraní','Indep. Medellín','Internacional','Lanús','Metropolitanos','Nacional Potosí','Olimpia','RB Bragantino','Racing Club','Racing Club de Montevideo','Rayo Zuliano','Real Tomayapo','S. Ameliano','S. Trinidense','Sport Huancayo','Sportivo Luqueño','Técnico U.','U. Católica','UCV','Uni. Católica','Universitario de Vinto','Unión La Calera','Wanderers','Wilstermann'],
    ['Adana Demirspor','Alanyaspor','Antalyaspor','Başakşehir','Beşiktaş','Bodrum FK','Eyüpspor','Fenerbahçe','Galatasaray','Gaziantep','Göztepe','Hatayspor','Kasımpaşa','Kayserispor','Konyaspor','Samsunspor','Sivasspor','Trabzonspor','Çaykur Rizespor'],
    ['Al Ain FC'],
    ['Dynamo Kyiv','Shakhtar Donetsk'],
    ['Austria Klagenfurt','FK Austria Wien','Blau-Weiss Linz','Grazer AK','TSV Hartberg','LASK','RB Salzburg','Rapid Wien','SCR Altach','SK Sturm Graz','WSG Tirol','Wolfsberger AC'],
    ['Slavia Praha','Sparta Praha','Viktoria Plzeň'],
    ['FC Bayern München','Carl Zeiss Jena','SGS Essen','Frankfurt','SC Freiburg','1. FC Köln','Leverkusen','RB Leipzig','TSG Hoffenheim','Turbine Potsdam','SV Werder Bremen','VfL Wolfsburg'],
    ['Arsenal','Aston Villa','Brighton','Chelsea','Crystal Palace','Everton','Leicester City','Liverpool','Manchester City','Manchester Utd','Spurs','West Ham'],
    ['AS Saint-Étienne','Dijon FCO','FC Fleury 91','En Avant Guingamp','Montpellier','FC Nantes','OL','Paris FC','PSG','Stade de Reims','Strasbourg'],
    ['Angel City FC','Bay FC','Chicago Red Stars','Gotham FC','Houston Dash','KC Current','NC Courage','Orlando Pride','Portland Thorns','Rac. Louisville','Seattle Reign','San Diego Wave','Utah Royals FC','Washington Spirit'],
    ['Athletic Club','Atlético de Madrid','FC Barcelona','SD Eibar','RCD Espanyol','Granada CF','Levante Badalona','Levante UD','Madrid CFF','RC Deportivo','Real Betis','Real Madrid','Real Sociedad','Sevilla FC','UD Tenerife','Valencia CF'],
    ['SL Benfica'],
    ['Ajax'],
    ['Slavia Praha'],
    ['FC Zürich'],
    ['FC Rosengård'],
    ['Glasgow City FC'],
    ['Juventus','AS Roma']
]

module.exports = clubs;