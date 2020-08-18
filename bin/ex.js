<!doctype html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Angular Example -ASIF</title>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.5/angular.min.js"></script>
   </head>
   <body ng-app="" 
ng-init="stocks=['AAMRATECH', 'ABBANK', 'ACI', 'ACIFORMULA', 'ACTIVEFINE', 'AFCAGRO',
 'AFTABAUTO', 'AGNISYSL', 'AGRANINS', 'AL-HAJTEX', 'ALARABANK', 'ALLTEX', 
'AMBEEPHA', 'AMCL(PRAN)', 'ANLIMAYARN', 'APEXFOODS', 'APEXFOOT', 'APEXSPINN',
 'APEXTANRY', 'APOLOISPAT', 'ARAMIT', 'ARAMITCEM', 'ARGONDENIM', 'ASIAINS', 
'ASIAPACINS', 'ATLASBANG', 'BANGAS', 'BATASHOE', 'BATBC', 'BAYLEASING', 
'BBS', 'BDCOM', 'BDFINANCE', 'BDLAMPS', 'BEACHHATCH', 'BEDL', 
'BENGALWTL', 'BERGERPBL', 'BEXIMCO', 'BGIC', 'BRACBANK', 'BSC', 
'BSCCL', 'BSRMSTEEL', 'BXPHARMA', 'CENTRALINS', 'CENTRALPHL', 'CITYBANK', 
'CITYGENINS', 'CMCKAMAL', 'CONFIDCEM', 'CONTININS', 'DACCADYE', 'DBH', 
'DELTALIFE', 'DELTASPINN', 'DESCO', 'DESHBANDHU', 'DHAKABANK', 'DHAKAINS',
 'DSHGARME', 'DUTCHBANGL', 'EASTERNINS', 'EASTLAND', 'EASTRNLUB', 
'EBL', 'ECABLES', 'EHL', 'EMERALDOIL', 'ENVOYTEX',
 'EXIMBANK', 'FAMILYTEX', 'FARCHEM', 'FAREASTLIF', 'FEDERALINS', 'FEKDIL',
 'FIRSTSBANK', 'FLEASEINT', 'FUWANGCER', 'FUWANGFOOD']">
      Search: <input ng-model="searchText">
      <table id="searchTextResults">
         <tr>
            <th><hr/>Company<hr/></th>
         </tr>
         <tr ng-repeat="stock in stocks | filter:searchText | limitTo: 10">
            <td>{{stock}}</td>
         </tr>
      </table>
   </body>
</html>