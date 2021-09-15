# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# nbaPlayoffPool

## HOW THE POOL WORKS

 1. Each team name corresponds to pool participants. 
 2. Each participant will take turn choosing an active nba player. This player is cross checked 
 with the players actively in nba. And it is crosschecked to make sure no other participants chose 
 said player. Player names are matched exactly regarding capital letters. This is
 due to the database matching the names exactly. 
 3. Year to year, there are varying number of participants so there is an option to add and minus teams. 
 4. For ease of selecting players, the nba players list can be filtered by teams  and when 
    playoffs start, filtered by injuries.
 5. Players can be sorted by points and name. 
  
  ## CODING FEATURES ...
  
  1. Web responsive page. Used css modules to avoid clashing of class name in one massive master css
     styles page. [example code](/nbaPlayoffPoolDocs/cssModules.JPG)
  2. I fetched the basketball season stats from an api. This was done using async and await.
     [example code ](/nbaPlayoffPoolDocs/fetch.JPG)
     ( As nba playoff season begins, I will create fetching of nba playoff points daily to update the players' playoff points.)
  3. I used easbase, a serverless database. The nba players database is large and the application will allow for many calls to filter and sort 
	    the data so a database was necessary.  The advantages of easybase is a server is not needed and it has a react interface.
     [example code](/nbaPlayoffPoolDocs/database.JPG)
  4. State management across components was handled with react redux. [example code 1](/nbaPlayoffPoolDocs/reactRedux1.JPG), [example code 2](/nbaPlayoffPoolDocs/reactRedux2.JPG)
     [example code 3](/nbaPlayoffPoolDocs/reactRedux3.JPG), [example code 4](/nbaPlayoffPoolDocs/reactRedux4.JPG)
 
