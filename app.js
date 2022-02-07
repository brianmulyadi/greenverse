// TO DO
// * read json file and assign it into a variable
// * calculate time remaining
// * inject HTML to table

// READ JSON
const companies = [
    {
      "Company Name": "BT",
      "Target": "Net Zero",
      "Deadline": 2045,
      "Last Updated": "15-Sep-18",
      "Unix Date": 1536969600,
      "Remarks": "BT (15 September 2018) net zero carbon business by 2045"
    },
    {
      "Company Name": "Verizon",
      "Target": "Net Zero",
      "Deadline": 2035,
      "Last Updated": "22-Apr-19",
      "Unix Date": 1555891200,
      "Remarks": "Verizon (22 April 2019) net zero by 2035"
    },
    {
      "Company Name": "British Airways",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Oct-19",
      "Unix Date": 1570752000,
      "Remarks": "British Airways (11 October 2019)  net zero by 2050"
    },
    {
      "Company Name": "Ikea",
      "Target": "Climate Positive",
      "Deadline": 2030,
      "Last Updated": "27-Nov-19",
      "Unix Date": 1574812800,
      "Remarks": "Ikea (27 November 2019) ‘climate-positive’ by 2030"
    },
    {
      "Company Name": "Land Securities",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "8-Nov-19",
      "Unix Date": 1573171200,
      "Remarks": "Land Securities (8 November 2019) net zero emissions by 2030"
    },
    {
      "Company Name": "National Trust",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "9-Jan-20",
      "Unix Date": 1578528000,
      "Remarks": "National Trust (9 January 2020) net zero emissions by 2030"
    },
    {
      "Company Name": "Microsoft",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "16-Jan-20",
      "Unix Date": 1579132800,
      "Remarks": "Microsoft (16 January 2020) net zero by 2030, with an additional goal of removing all carbon emitted since it was founded in 1975"
    },
    {
      "Company Name": "AstraZeneca",
      "Target": "Carbon Negative",
      "Deadline": 2025,
      "Last Updated": "22-Jan-20",
      "Unix Date": 1579651200,
      "Remarks": "AstraZeneca (22 January 2020) carbon-negative by 2030, and net zero operational carbon emissions by 2025"
    },
    {
      "Company Name": "Sainsbury’s",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "28-Jan-20",
      "Unix Date": 1580169600,
      "Remarks": "Sainsbury’s (28 January 2020) net zero emissions by 2040"
    },
    {
      "Company Name": "Mace",
      "Target": "Net Zero",
      "Deadline": 2020,
      "Last Updated": "29-Jan-20",
      "Unix Date": 1580256000,
      "Remarks": "Mace (29 January 2020) net zero carbon by 2020"
    },
    {
      "Company Name": "EY",
      "Target": "Carbon Neutral",
      "Deadline": 2020,
      "Last Updated": "31-Jan-20",
      "Unix Date": 1580428800,
      "Remarks": "EY (31 January 2020) carbon neutral by 2020"
    },
    {
      "Company Name": "Sky",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "4-Feb-20",
      "Unix Date": 1580774400,
      "Remarks": "Sky (4 February 2020) net zero by 2030"
    },
    {
      "Company Name": "BP",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "12-Feb-20",
      "Unix Date": 1581465600,
      "Remarks": "BP (12 Febraury 2020) net zero by 2050"
    },
    {
      "Company Name": "Sir Robert McAlpine",
      "Target": "Net Zero",
      "Deadline": 2024,
      "Last Updated": "19-Feb-20",
      "Unix Date": 1582070400,
      "Remarks": "Sir Robert McAlpine (19 February 2020) net zero by 2024"
    },
    {
      "Company Name": "Mitie",
      "Target": "Net Zero",
      "Deadline": 2025,
      "Last Updated": "20-Feb-20",
      "Unix Date": 1582156800,
      "Remarks": "Mitie (20 February 2020) net zero by 2025"
    },
    {
      "Company Name": "Cemex",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "21-Feb-20",
      "Unix Date": 1582243200,
      "Remarks": "Cemex (21 February 2020) net zero concrete by 2050"
    },
    {
      "Company Name": "O2",
      "Target": "Net Zero",
      "Deadline": 2025,
      "Last Updated": "3-Mar-20",
      "Unix Date": 1583193600,
      "Remarks": "O2 (03 March 2020) net zero network and operations by 2025"
    },
    {
      "Company Name": "Barclays",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "30-Mar-20",
      "Unix Date": 1585526400,
      "Remarks": "Barclays (30 March 2020) net zero by 2050"
    },
    {
      "Company Name": "Shell",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "20-Apr-20",
      "Unix Date": 1587340800,
      "Remarks": "Shell (20 April 2020) net zero by 2050"
    },
    {
      "Company Name": "CMS",
      "Target": "Net Zero",
      "Deadline": 2025,
      "Last Updated": "24-Apr-20",
      "Unix Date": 1587686400,
      "Remarks": "CMS (24 April 2020) net zero by 2025"
    },
    {
      "Company Name": "Jacob’s Engineering",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "24-Apr-20",
      "Unix Date": 1587686400,
      "Remarks": "Jacob’s Engineering (24 April 2020) net zero by 2030"
    },
    {
      "Company Name": "Total",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "5-May-20",
      "Unix Date": 1588636800,
      "Remarks": "Total  (5 May 2020) net zero by 2050"
    },
    {
      "Company Name": "University of Manchester",
      "Target": "Net Zero",
      "Deadline": 2038,
      "Last Updated": "29-May-20",
      "Unix Date": 1590710400,
      "Remarks": "University of Manchester (29 May 2020) net zero investment portfolio 2038"
    },
    {
      "Company Name": "Tetra Pak",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Jun-20",
      "Unix Date": 1591833600,
      "Remarks": "Tetra Pak (11 June 2020) net zero value chain by 2050"
    },
    {
      "Company Name": "Unilever",
      "Target": "Net Zero",
      "Deadline": 2039,
      "Last Updated": "14-Jun-20",
      "Unix Date": 1592092800,
      "Remarks": "Unilever (14 June 2020) net zero by 2039"
    },
    {
      "Company Name": "British Land",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "23-Jun-20",
      "Unix Date": 1592870400,
      "Remarks": "British Land (23 June 2020) net zero portfolio by 2030"
    },
    {
      "Company Name": "Barrett Developments",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "30-Jun-20",
      "Unix Date": 1593475200,
      "Remarks": "Barrett Developments (30 June 2020) net zero by 2040"
    },
    {
      "Company Name": "Lucozade Ribena Suntory",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "1-Jul-20",
      "Unix Date": 1593561600,
      "Remarks": "Lucozade Ribena Suntory (01 July 2020) net zero value chain by 2050"
    },
    {
      "Company Name": "M&G Real Estate",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "13-Jul-20",
      "Unix Date": 1594598400,
      "Remarks": "M&G Real Estate (13 July 2020) net zero operational emissions by 2030 and net zero across its real estate portfolio by 2050"
    },
    {
      "Company Name": "Apple",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "21-Jul-20",
      "Unix Date": 1595289600,
      "Remarks": "Apple (21 July 2020) net zero by 2030"
    },
    {
      "Company Name": "Capgemini",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "24-Jul-20",
      "Unix Date": 1595548800,
      "Remarks": "Capgemini (24 July 2020) net zero operations and supply chain by 2030"
    },
    {
      "Company Name": "Novo Nordisk",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "4-Aug-20",
      "Unix Date": 1596499200,
      "Remarks": "Novo Nordisk (04 August 2020) net zero by 2030"
    },
    {
      "Company Name": "HMRC",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "1-Sep-20",
      "Unix Date": 1598918400,
      "Remarks": "HMRC (01 September 2020) net zero by 2040"
    },
    {
      "Company Name": "Ikea",
      "Target": "Climate Positive",
      "Deadline": 2030,
      "Last Updated": "2-Sep-20",
      "Unix Date": 1599004800,
      "Remarks": "Ikea (02 September 2020) climate positive by 2030"
    },
    {
      "Company Name": "PwC",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "15-Sep-20",
      "Unix Date": 1600128000,
      "Remarks": "PwC (15 September 2020) net zero by 2030"
    },
    {
      "Company Name": "IAG",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "IAG (11 September 2020) net zero carbon emissions by 2050"
    },
    {
      "Company Name": "Japan Airlines",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Japan Airlines (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Qantas",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Qantas (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Finnair",
      "Target": "Carbon Neutral",
      "Deadline": 2045,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Finnair (11 September 2020) carbon neutrality by 2045"
    },
    {
      "Company Name": "American Airlines",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "American Airlines (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Cathay Pacific",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Cathay Pacific (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Iberia",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Iberia (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Malaysia Airlines",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Malaysia Airlines (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Qatar Airways",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Qatar Airways (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Royal Air Moroc",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Royal Air Moroc (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Royal Jordanian",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Royal Jordanian (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "S7 Airlines",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "S7 Airlines (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Sri Lankan Airlines",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Sri Lankan Airlines (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Fiji Airways",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "11-Sep-20",
      "Unix Date": 1599782400,
      "Remarks": "Fiji Airways (11 September 2020) net zero by 2050"
    },
    {
      "Company Name": "Facebook",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "15-Sep-20",
      "Unix Date": 1600128000,
      "Remarks": "Facebook (15 September 2020) net zero value chain by 2030"
    },
    {
      "Company Name": "Nespresso",
      "Target": "Carbon Neutral",
      "Deadline": 2022,
      "Last Updated": "17-Sep-20",
      "Unix Date": 1600300800,
      "Remarks": "Nespresso (17 September 2020) carbon neutrality by 2022"
    },
    {
      "Company Name": "Arup",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "22-Sep-20",
      "Unix Date": 1600732800,
      "Remarks": "Arup (22 September 2020) net zero 2030"
    },
    {
      "Company Name": "Bolt",
      "Target": "Climate Positive",
      "Deadline": 2020,
      "Last Updated": "22-Sep-20",
      "Unix Date": 1600732800,
      "Remarks": "Bolt (22 September 2020) climate positive by end of 2020"
    },
    {
      "Company Name": "Spirax-Sarco",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "22-Sep-20",
      "Unix Date": 1600732800,
      "Remarks": "Spirax-Sarco (22 September 2020) net zero by 2040"
    },
    {
      "Company Name": "LafargeHolcim",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "22-Sep",
      "Unix Date": 1663804800,
      "Remarks": "LafargeHolcim (22 September) net zero by 2050"
    },
    {
      "Company Name": "NHS",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "1-Oct-20",
      "Unix Date": 1601510400,
      "Remarks": "NHS (01 October 2020) net zero by 2040"
    },
    {
      "Company Name": "Aviva Investors Pension Scheme",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "2-Oct-20",
      "Unix Date": 1601596800,
      "Remarks": "Aviva Investors Pension Scheme (02 October 2020) net zero by 2050"
    },
    {
      "Company Name": "BT Pension Scheme",
      "Target": "Net Zero",
      "Deadline": 2035,
      "Last Updated": "8-Oct-20",
      "Unix Date": 1602115200,
      "Remarks": "BT Pension Scheme (08 October 2020) net zero by 2035"
    },
    {
      "Company Name": "HSBC",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "9-Oct-20",
      "Unix Date": 1602201600,
      "Remarks": "HSBC (09 October 2020) net zero financed emissions by 2050"
    },
    {
      "Company Name": "City of London Corporation",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "12-Oct-20",
      "Unix Date": 1602460800,
      "Remarks": "City of London Corporation (12 October 2020) net zero by 2040"
    },
    {
      "Company Name": "John Lewis",
      "Target": "Net Zero",
      "Deadline": 2035,
      "Last Updated": "19-Oct-20",
      "Unix Date": 1603065600,
      "Remarks": "John Lewis (19 October 2020) net zero by 2035"
    },
    {
      "Company Name": "Dentsu International",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "22-Oct-20",
      "Unix Date": 1603324800,
      "Remarks": "Dentsu International (22 October 2020) net zero by 2030"
    },
    {
      "Company Name": "Lime",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "23-Oct-20",
      "Unix Date": 1603411200,
      "Remarks": "Lime (23 October 2020) net zero by 2030"
    },
    {
      "Company Name": "Equinor",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "3-Nov-20",
      "Unix Date": 1604361600,
      "Remarks": "Equinor (03 November 2020) net zero by 2050"
    },
    {
      "Company Name": "KPMG",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "9-Nov-20",
      "Unix Date": 1604880000,
      "Remarks": "KPMG (09 November 2020) net zero by 2030"
    },
    {
      "Company Name": "Tesco",
      "Target": "Net Zero",
      "Deadline": 2035,
      "Last Updated": "16-Nov-20",
      "Unix Date": 1605484800,
      "Remarks": "Tesco (16 November 2020) net zero by 2035"
    },
    {
      "Company Name": "Henkel",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "18-Nov-20",
      "Unix Date": 1605657600,
      "Remarks": "Henkel (18 November 2020) net zero by 2040 under Amazon’s Climate Pledge"
    },
    {
      "Company Name": "Diageo",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "23-Nov-20",
      "Unix Date": 1606089600,
      "Remarks": "Diageo (23 November 2020) net zero operations by 2030"
    },
    {
      "Company Name": "Vodafone",
      "Target": "Net Zero",
      "Deadline": 2027,
      "Last Updated": "23-Nov-20",
      "Unix Date": 1606089600,
      "Remarks": "Vodafone (23 November 2020) net zero by 2040 and net zero carbon emissions from operations by 2027"
    },
    {
      "Company Name": "Coca-Cola European Partners",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "7-Dec-20",
      "Unix Date": 1607299200,
      "Remarks": "Coca-Cola European Partners (07 December 2020) net zero by 2040"
    },
    {
      "Company Name": "Glencore",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "7-Dec-20",
      "Unix Date": 1607299200,
      "Remarks": "Glencore (07 December 2020) net zero by 2050"
    },
    {
      "Company Name": "Canary Wharf Group",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "9-Dec-20",
      "Unix Date": 1607472000,
      "Remarks": "Canary Wharf Group (09 December 2020) net zero by 2030"
    },
    {
      "Company Name": "WHSmith",
      "Target": "Net Zero",
      "Deadline": 2025,
      "Last Updated": "11-Dec-20",
      "Unix Date": 1607644800,
      "Remarks": "WHSmith (11 December 2020) net zero emissions by 2025"
    },
    {
      "Company Name": "PepsiCo",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "14-Jan-21",
      "Unix Date": 1610582400,
      "Remarks": "PepsiCo (14 January 2021) net zero by 2040"
    },
    {
      "Company Name": "BBC",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "14-Jan-21",
      "Unix Date": 1610582400,
      "Remarks": "BBC (14 January 2021) net zero by 2030"
    },
    {
      "Company Name": "Aviva Investors Real Assets",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "20-Jan-21",
      "Unix Date": 1611100800,
      "Remarks": "Aviva Investors Real Assets  (January 2021) net zero by 2040"
    },
    {
      "Company Name": "CDL",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "3-Feb-21",
      "Unix Date": 1612310400,
      "Remarks": "CDL (03 February 2021) net zero operations by 2030"
    },
    {
      "Company Name": "Avantium",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "4-Feb-21",
      "Unix Date": 1612396800,
      "Remarks": "Avantium (4 February 2021) net zero operations by 2030"
    },
    {
      "Company Name": "Centrica",
      "Target": "Net Zero",
      "Deadline": 2045,
      "Last Updated": "25-Feb-21",
      "Unix Date": 1614211200,
      "Remarks": "Centrica (25 February 2021) net zero by 2045"
    },
    {
      "Company Name": "Aviva plc",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "1-Mar-21",
      "Unix Date": 1614556800,
      "Remarks": "Aviva plc (1 March 2021) net zero operations, supply chain by 2030 and investments by 2040"
    },
    {
      "Company Name": "Burger King",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Burger King (19 April 2021) net zero operations by 2030"
    },
    {
      "Company Name": "Fora",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Fora (19 April 2021) net zero by 2030"
    },
    {
      "Company Name": "Mulberry",
      "Target": "Net Zero",
      "Deadline": 2030,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Mulberry (19 April 2021) net zero by 2030"
    },
    {
      "Company Name": "Nestle",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Nestle (19 April 2021) net zero by 2050"
    },
    {
      "Company Name": "Visa",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Visa (19 April 2021) net zero by 2040"
    },
    {
      "Company Name": "Whitbread",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "Whitbread (19 April 2021) net zero by 2040"
    },
    {
      "Company Name": "WPP",
      "Target": "Net Zero",
      "Deadline": 430,
      "Last Updated": "19-Apr-21",
      "Unix Date": 1618790400,
      "Remarks": "WPP (19 April 2021) net zero by 20430"
    },
    {
      "Company Name": "Dell",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "20-Apr-21",
      "Unix Date": 1618876800,
      "Remarks": "Dell (20 April 2021) net zero by 2050"
    },
    {
      "Company Name": "Co-op",
      "Target": "Carbon Neutral",
      "Deadline": 2025,
      "Last Updated": "5-May-21",
      "Unix Date": 1620172800,
      "Remarks": "Co-op (5 May 2021) carbon neutrality across own-brand food and drink by 2025"
    },
    {
      "Company Name": "Highland Spring",
      "Target": "Net Zero",
      "Deadline": 2040,
      "Last Updated": "4-Jun-21",
      "Unix Date": 1622764800,
      "Remarks": "Highland Spring (4 June 2021) net zero by 2040"
    },
    {
      "Company Name": "Tyson Foods",
      "Target": "Net Zero",
      "Deadline": 2050,
      "Last Updated": "15-Jun-21",
      "Unix Date": 1623715200,
      "Remarks": "Tyson Foods (15 June 2021) net zero by 2050"
    },
    {
      "Company Name": "Burberry",
      "Target": "Climate Positive",
      "Deadline": 2040,
      "Last Updated": "14-Jun-21",
      "Unix Date": 1623628800,
      "Remarks": "Burberry (14 June 2021) climate positive by 2040"
    }
  ]

// SELECT ITEMS
const testContainer = document.querySelector('.test-container');
const tableBody = document.querySelector('.table-body');

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded',() => {
    displayCompanies();
})

// FUNCTIONS
function displayCompanies() {
    let display = companies.map((item) => {
        console.log(item["Unix Date"]);
        return `<tr>
                    <td>${item["Company Name"]} <span><a href=""><i class="fa fa-info-circle has-text-grey-light"></i></a></span></td>
                    <td>${item.Target}</td>
                    <td>${item.Deadline}</td>
                    <td>${item["Last Updated"]}</td>
                    <td>8 yrs 5 mths 20 days</td>
                </tr>`
    });
    display = display.join('');
    tableBody.innerHTML = display;
}