<script>

document.write("<b> HUMAN DATA TO CODE </b><br><br>")

// Corporate Informations (1) 
function statistics(){
Companyname = "JVT"
Designation = "Programmer"
Salary = "2.3 or 230000"
Location = "Bangalore"
document.write("<br> Company name : ", Companyname,"<br> Designation : ", Designation," <br> Salary : ", Salary,"<br> Location : " , Location)
}
statistics()

function statist(name){
Companyname = "JVT"
Designation = "Programmer"
Salary = "2.3 or 230000"
Location = "Bangalore"
return Companyname
}
var info = statist("Chanki Mishra")
document.write(info)

function statis(Companyname, Designation , Salary){
var Location = "Bangalore"
document.write("<br>",Companyname," ",Designation," ",Location,"<br>")
}
statis( "JVT" , "Programmer" ,"2.3 or 230000")

class statistic{
constructor(){
this.Companyname = "JVT"
this.Designation = " Programmer"
}
Data(Salary , Location){
this.Salary = Salary
this.Location = Location
}
Display(){
document.write(this.Companyname ,this.Designation )
}
}
var info = new statistic()
info.Data("2.3 or 230000"," Bangalore")
info.Display()

let report ={
Companyname : "JVT",
Designation: "Programmer",
Salary : "2.3 or 230000",
Location: "Bangalore"
}
report.method = function(){
document.write("<br>",this.Companyname, this.Designation , this.Salary, this.Location )
document.write("<br>",this.Companyname, this.method)
}
report.method()

let reports ={
Companyname : "JVT",
Designation: "Programmer",
Salary : "2.3 or 230000",
Location: "Bangalore",
 details(){
 document.write(this.Designation, this.Location)
}
}
reports.details()
document.write("<br>")

// Corporate Informations (2) 
function Bio(){
Name  = "Jai Venkateswara Technologies"
EducationalQualification = "BTECH. MCA MBA BSC MSC"
DateOfBirth = "2/6/1988"
CommunicationAddress = "233/3 Ground floor new thippasandra"
ResidenceNumber = 08025216666
Mobile = 9900367097
Email = "venkatesh.db@gmail.com"
TotalITExp = "1 years"
SkillRelevantExperience = " C,CPP all Lang & 1 years"
ReportingManagers = "Venkatesh"
PanCardNo ="asu675901f"
document.write("<br> Name : ", Name,"<br> Educational Qualification : ", EducationalQualification," <br> Date of Birth  : ", DateOfBirth,"<br> Communication Address : " , CommunicationAddress ,"<br> Residence Number :", ResidenceNumber,"<br> Mobile :",Mobile,"<br> Email :",Email,"<br> Total IT Experience :",TotalITExp,"<br> Skill & Relevant Experience :",SkillRelevantExperience,"<br> Reporting Manager's :", ReportingManagers,"<br> PAN CARD NO. : ",PanCardNo)
}
Bio()

document.write("<br>")
function Biod(name){
Name  = "Jai Venkateswara Technologies"
EducationalQualification = "BTECH. MCA MBA BSC MSC"
DateOfBirth = "2/6/1988"
CommunicationAddress = "233/3 Ground floor new thippasandra"
ResidenceNumber = 08025216666
Mobile = 9900367097
Email = "venkatesh.db@gmail.com"
TotalITExp = "1 years"
SkillRelevantExperience = " C,CPP all Lang & 1 years"
ReportingManagers = "Venkatesh"
PanCardNo ="asu675901f"
return Name
}
var info = Biod("Chanki Mishra")
document.write(info)

function Bioda(EducationalQualification,CommunicationAddress,ResidenceNumber){
var ReportingManagers = "Venkatesh"
document.write("<br>",EducationalQualification," ",CommunicationAddress," ",ResidenceNumber," ",ReportingManagers,"<br>")
}
Bioda( "BTECH. MCA MBA BSC MSC" , "233/3 Ground floor new thippasandra" ,08025216666)

class Biodat{
constructor(){
this.Name  = "Jai Venkateswara Technologies"
this.EducationalQualification = "BTECH. MCA MBA BSC MSC"
this.DateOfBirth = "2/6/1988"
}
Data(Mobile , Email){
this.Mobile = Mobile
this.Email = Email
}
Display(){
document.write("<br>",this.Name,this.EducationalQualification,this.DateOfBirth ,"<br>")
}
}
var info = new Biodat()
info.Data(9900367097,"venkatesh.db@gmail.com")
info.Display()

let report1 ={
Name  : "Jai Venkateswara Technologies" ,
EducationalQualification :"BTECH. MCA MBA BSC MSC",
DateOfBirth : "2/6/1988",
CommunicationAddress :"233/3 Ground floor new thippasandra",
ResidenceNumber : 08025216666
}
report1.method = function(){
document.write("<br>",this.Name, this.EducationalQualification , this.DateOfBirth, this.CommunicationAddress,this.ResidenceNumber )
document.write("<br>",this.Name, this.method)
}
report1.method()

let report2 ={
Name  : "Jai Venkateswara Technologies" ,
EducationalQualification :"BTECH. MCA MBA BSC MSC",
DateOfBirth : "2/6/1988",
CommunicationAddress :"233/3 Ground floor new thippasandra",
ResidenceNumber : 08025216666,
 details(){
 document.write("<br>",this.Name, this.CommunicationAddress,"<br>")
}
}
report2.details()

//Corporate Information(3)
function NetConnReq(){
AccountNo = 1135497
BroadbandUserID = 11128550
IPAddress = "10.245.97.123"
document.write("<br> AccountNo. : ",AccountNo,"<br> Broadband UserID  : ", BroadbandUserID," <br> IP Address : ", IPAddress)
}
NetConnReq()

document.write("<br>")
function NetConnReq1(name){
AccountNo = 1135497
BroadbandUserID = 11128550
IPAddress = "10.245.97.123"
return AccountNo
}
var info =  NetConnReq1("Chanki Mishra")
document.write(info)
document.write("<br>")

function  NetConnReq2(AccountNo,BroadbandUserID){
var IPAddress  = "10.245.97.123"
document.write("<br>",AccountNo," ",BroadbandUserID," ",IPAddress,"<br>")
}
NetConnReq2( " 1135497" , "11128550")
document.write("<br>")

class NetConnReq3{
constructor(){
this.AccountNo = "1135497"
this.BroadbandUserID = " 11128550"
}
Data(IPAddress){
this.IPAddress = IPAddress
}
Display(){
document.write(this.AccountNo ,this.BroadbandUserID )
}
}
var info = new NetConnReq3()
info.Data('10.245.97.123')
info.Display()
document.write("<br>")

let NetConnReq4 ={
AccountNo: 1135497 ,
BroadbandUserID : 11128550,
IPAddress:"10.245.97.123"
}
NetConnReq4.method = function(){
document.write("<br>",this.AccountNo, this.BroadbandUserID  , this.IPAddress )
document.write("<br>",this.AccountNo, this.method)
}
NetConnReq4.method()

let NetConnReq5 ={
AccountNo: 1135497 ,
BroadbandUserID : 11128550,
IPAddress:"10.245.97.123",
 details(){
 document.write("<br>",this.AccountNo, " " ,this.BroadbandUserID,"<br>")
}
}
NetConnReq5.details()
document.write("<br>")

//Corporate Information(4)
function NetUsage(){
TotalMBdownloaded = "21.26 GB "
MobiledownloadSpeed = "30.05 mbps"
MobileuploadSpeed = "32.06 mbps"
document.write("<br> Total MB Downloaded : ",TotalMBdownloaded,"<br> Mobile Download Speed : ", MobiledownloadSpeed," <br> Mobile Upload Speed : ", MobileuploadSpeed )
}
NetUsage()

document.write("<br>")
function NetUsage1(name){
TotalMBdownloaded = "21.26 GB "
MobiledownloadSpeed = "30.05 mbps"
MobileuploadSpeed = "32.06 mbps"
if (TotalMBdownloaded > 100)
 return 'Your daily data usage is completed'
 else 
 document.writeln(MobiledownloadSpeed,MobileuploadSpeed )
}
var info = NetUsage1("Chanki Mishra")
document.write(info)
document.write("<br>")

function NetUsage2(TotalMBdownloaded ,MobiledownloadSpeed){
var MobileuploadSpeed  = "32.06 mbps"
if (TotalMBdownloaded > 100)
 return 'Your daily data usage is completed'
 else 
 document.writeln(MobiledownloadSpeed,MobileuploadSpeed )
document.write("<br>",TotalMBdownloaded," ",MobiledownloadSpeed," ",MobileuploadSpeed ,"<br>")
}
NetUsage( "21.26 GB " , "30.05 mbps")
document.write("<br>")

class NetUsage3{
constructor(){
this.TotalMBdownloaded = "21.26 GB "
this.MobiledownloadSpeed = "30.05 mbps"
this.AccountNo = "1135497"
this.BroadbandUserID = " 11128550"
}
Data(MobileuploadSpeed){
this.MobileuploadSpeed = MobileuploadSpeed
}
Display(){
if (TotalMBdownloaded > 100)
 return 'Your daily data usage is completed'
 else 
 document.writeln(this.MobiledownloadSpeed,this.MobileuploadSpeed )
}
}
var info = new NetUsage3()
info.Data( "32.06 mbps")
info.Display()
document.write("<br>")

let NetUsage4 ={
TotalMBdownloaded : "21.26 GB",
MobiledownloadSpeed : "30.05 mbps",
MobileuploadSpeed : "32.06 mbps"
}
NetUsage4.method = function(){
if (TotalMBdownloaded > 100)
 return 'Your daily data usage is completed'
 else 
 document.writeln(this.MobiledownloadSpeed,this.MobileuploadSpeed )
//document.write("<br>",this.TotalMBdownloaded, this.MobiledownloadSpeed , this.MobileuploadSpeed )
document.write("<br>",this.TotalMBdownloaded, this.method)
}
NetUsage4.method()

let NetUsage5 ={
TotalMBdownloaded : "21.26 GB",
MobiledownloadSpeed : "30.05 mbps",
MobileuploadSpeed : "32.06 mbps",
 details(){
 if (TotalMBdownloaded > 100)
 return 'Your daily data usage is completed'
 else 
 document.writeln('<br>',this.MobiledownloadSpeed," ",this.MobileuploadSpeed,"<br>" )
}
}
NetUsage5.details()
document.write("<br>")

// corporate informations 5
let ups=
{
      model:"digital 600",
      ipvoltage:"230V",
      frequency:"50Hz",
      opvoltage:"230V",
      battery(type,capacity,backup,time,weight)
   {
      this.type=type
      this.capacity=capacity
      this.backup=backup
      this.time=time
      this.weight=weight
   },
   validate()
   {
      if(this.model=="digital 600")
      {
         this.display()
      }
      else
      {
         document.writeln("Wrong model no")
         //return "Wrong model no"
      }
   
   },
    display()
    {
       document.writeln(this.model)
       document.writeln(this.ipvoltage)
       document.writeln(this.frequency)
       document.writeln(this.opvoltage)
       document.writeln(this.type)
       document.writeln(this.capacity)
       document.writeln(this.backup)
       document.writeln(this.time)
       document.writeln(this.weight)
    }
 }
 
 ups.battery("Sealed","12V,7Ah","5hrs","7hrs","6.1Kg")
 ups.validate()
 
 // corporate information 5
let train=
    {
       trainno:"RJ4560",
       name:"Rajadhani",
       //this.info(100038,41150,"1/1/2021","AC 3Tier","General")
       info(id,pnrno,date,clas,quota)
       {
          this.id=id
          this.pnrno=pnrno
          this.clas=clas
          this.quota=quota
          if(this.id==100038)
          {
            document.writeln("<br>Your ticket details are :")
            this.details("<br>Chanki Mishra","Male","aj@123","ERS","BLR<br>")
          }
          else
          {
            document.writeln("Error in PNR no try again!!")
          }
       },
      details(name,gender,mailid,from,to)
      {
         this.name=name
         this.gender=gender
         this.mailid=mailid
         this.from=from
         this.to=to
         if(mailid=="aj@123")
         {
          //document.writeln("Wish you a happy and safe journey")
          this.display()
        }
        else
        {
          document.writeln("Error try again!!")
        }
        },
      display()
      {
       
        document.writeln(this.id)
       document.writeln(this.pnrno)
       document.writeln(this.clas)
       document.writeln(this.quota)
       document.writeln(this.name)
       document.writeln(this.gender)
       document.writeln(this.mailid)
       document.writeln(this.from)
       document.writeln(this.to)
       document.writeln("Wish you a happy and safe journey")
       }
      }
 train.info(100038,41150,"1/1/2021","AC 3Tier","General")
 document.write("<br>")
 
 // corporate information 6

let TourtoPILGRIMAGE = {
TicketType  : " Special Entry Darshan",
Date : " Dec 1st ",
Day : "Tuesday",
Time : "3:30 Am ",
PerSlotTickets : 2000,
BookingNo       : "IS151110080016",
NameofthePilgrim: "Venkatesh ",
OrderNo        : 010600013554,
Email           : "venkateshprofessional7@gmail.com",
Amountinfigures : 220.00,
ProofofID:   "Aadhaar Card 733498928758",
BookedDateTime: "11062015 11:36:46",
NoofPersons: 1,
NameoftheSeva  : "Archana",
ReportingTime : "4:00 AM",
PerformanceDateTime : "12012015 AM 4:30:00",
PrivilegetotheSeva : "Two Small Laddu",
BookedTime: "11:36:46",
AccommodationType :" Rs 500 Tirumala",
Available  :    350,
NoofTickets :   1,
Rate :    "  50 to 2000",
validate(TicketType  ,Date ,Day ,Time ,PerSlotTickets ,BookingNo ,NameofthePilgrim,OrderNo  ) {
      this.TicketType=TicketType
      this.Date =Date
      this.Day = Day
      this.Time =Time
      this.PerSlotTickets=PerSlotTickets
      this.BookingNo=BookingNo
      this.NameofthePilgrim=NameofthePilgrim
      this.OrderNo =OrderNo 
      this.Email  = "venkateshprofessional7@gmail.com"
      this.ProofofID =   "Aadhaar Card 733498928758"
      if( Email     == " " ) {
       alert( "Please provide your name!" );
          }
      if (Email == "venkateshprofessional7@gmail.com" && ProofofID == "Aadhaar Card 733498928758"){
             document.writeln(this.TicketType , this.Date, this.Day, this.Time ,this.PerSlotTickets,
this.BookingNo, this.NameofthePilgrim,this.OrderNo)
}
          else 
            return false;
         }
         
} 

TourtoPILGRIMAGE.validate( " Special Entry Darshan", " Dec 1st ", "Tuesday","3:30 Am ", 2000,"IS151110080016","Venkatesh ", 010600013554,)
document.write("<br>")

//corporate information 7

const Registration = {
Name :  " JVT",
Age :   5,
Gender : "Male",
EmailAddress : "info@jvtechnologies.co.in",
PhotoIDCard : "Voter Id or Ration card",
IDCardNo : "ASUPB590F",
Detailvalidation(Name,Age,Gender,EmailAddress,Address){
this.Name=Name
this.Age=Age
this.Gender=Gender
this.EmailAddress = EmailAddress
this.Address=Address
if (this.EmailAdress == "info@jvtechnologies.co.in")
          {
            document.writeln("<br>Your Registration Details :")
            this.details("<br>","Mr. venkatesh",25,	"Male","venkatesh.db@gmail.com", "BEML Main Road Bangalore", "Karnataka",560075,"<br>")
          }
          else
          {
            document.writeln("Error TRY ONCE AGAIN !!")
          }
       },
      details(Name ,Age ,Gender,EmailAddress,Address,City,State,Zip)
      {
         this.Name =Name
         this.Age=Age
         this.Gender=Gender
         this.EmailAddress=EmailAddress
         this.Address=Address
         this.City=City
         this.State = State
         this.Zip =Zip
        if(EmailAddress=="venkatesh.db@gmail.com")
         {
          this.display()
         if(Zip == "" || isNaN(Zip)  || Zip.length != 5 ) {
           document.write( "Please provide a zip in the format #####." )
           return false
           }
        else
        {
          document.writeln("Error try again!!")
        }
        }
      display()
      {
       
       document.writeln(this.Name)
       document.writeln(this.Age)
       document.writeln(this.Gender)
       document.writeln(this.EmailAddress)
       document.writeln(this.Address)
       document.writeln(this.City)
       document.writeln(this.State)
       document.writeln("Welcome")
       }
      }
      }
 Registration.Detailvalidation("Mr. Venkatesh",5,"Male","info@jvtechnologies.co.in","BEML Main Road")

// corporate information 8
   
   function cardnumber()
{
  var cardno = 6146496758938152
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}

// corporate information 9

function appearance(Weight, Height, Eyecolour, Gender, address, phone, Mobile, State, Country){
	if (Country == "India"){
		if (State == "Karnataka")
		{
	document.writeln(Weight, Height, Eyecolour, Gender, address, phone, Mobile, State)
    document.writeln(Height)
    document.writeln(Eyecolour)
    document.writeln(Gender)
    document.writeln(address)
    document.writeln(phone)
    document.writeln(Mobile)
    document.writeln(State)
    }
    else{
    return "Not valid"
    }
}
}
appearance("55", "5.8", "brown", "male", "btm", "9#######5", "85666666665", "andhrapradesh", "Bhutan")
appearance("55", "5.8", "brown", "male", "btm", "9333333335", "856666666665", "andhrapradesh", "India")

</script>



