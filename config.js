const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348089880021";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_27_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhZWR4WSs2SytYOTd4RUlzUjlGZ2Nha2FXTUFBUlE1VTZtNlE4Y1BkWG5rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBcHZKbzliblN5ZTVmbWJSdVJZOGRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1MTdmZGI1LTI1ZGYtNDExNy04YzhmLTIzZjk4NGRmOTUzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDIzNyxcbiAgICAgIDE2NCxcbiAgICAgIDc4LFxuICAgICAgNjMsXG4gICAgICA0NyxcbiAgICAgIDg1LFxuICAgICAgMjAxLFxuICAgICAgMTU3LFxuICAgICAgMTk3LFxuICAgICAgMjE3LFxuICAgICAgNTUsXG4gICAgICAyMjcsXG4gICAgICAyMjQsXG4gICAgICAxNDYsXG4gICAgICAyLFxuICAgICAgNzIsXG4gICAgICA1NixcbiAgICAgIDY5LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICA0NixcbiAgICAgIDcwLFxuICAgICAgMixcbiAgICAgIDIxNCxcbiAgICAgIDE3OSxcbiAgICAgIDIwOCxcbiAgICAgIDE2MyxcbiAgICAgIDIxOSxcbiAgICAgIDE5NSxcbiAgICAgIDkyLFxuICAgICAgMTM4LFxuICAgICAgMTc1LFxuICAgICAgOTMsXG4gICAgICAzMCxcbiAgICAgIDE1NSxcbiAgICAgIDE3OSxcbiAgICAgIDEyNixcbiAgICAgIDQ3LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDYySkYzM0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODk4ODAwMjE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0NTYxNDQyODg1NzI3OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0s5cEtRRkVJZkN5Ym9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwKzlHNUtmODJkbC9EUGNxY3d2aDBzUW12OHR0WXYxM0ZrV0p4YjZ2QWhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRUU0xLT0ExdFFBZXNYSFdablBCeWN4eWZEb3B2amY2Z21aSUpNeTFJL2JUdEZ0dGk4Y0hXTncrVEN1WVpvdkNIQUcwRktTckVKUXNvNWIvR05Da0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhCdlF0a0JZanhkRVlJdVBBMGFia0tyTjJCL3hnQVN2eGRVTEZrNVljSjdwU1lzV0ZFcDZUc3U0TW5LSDZYNmo5d3pGWW5IK1R4ekwzcVF1TTN0REJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODk4ODAwMjE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0NTIwNDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
