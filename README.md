# 4L-Sticker Front-End Website

### Project
This front-end angular application is part of a global project. This project also includes a back-end symfony application.
The goal is to raise money for a good cause, ["Les Enfants du Désert"](http://http://enfantsdudesert.org/), through their famous [4L Trophy](http://www.4ltrophy.com/) Event.

Through this project, we aim at raising awareness as well as implicating people.

People are invited to customize a little sticker on the website, and can make a donation to have it printed and put one of the 4L.

The donation is made with Paypal, then the server processes the donation and sends it to the mobile client which is used by the car occupants. Each day at night camp, they print the stickers of the day and stick them on the car.

### Limitations
This project was made in two weeks by a team of 5 people. 

Our main limitation was the poor network quality expected during the race. 

To avoid long loading times or no loading at all, we decided to minmize the size of the assets, in order for the racers to be able to access the stickers to be printed.

The server only processes json encoded data, and generates SVG-based images from simple hexa codes in json file.

### Technical Specifications

The front-end website runs on Angular and several node-modules, to install 
clone the repository and run

```
npm install

```
Then, launch gulp to track changes and compile files.

```
gulp
```

If you wish to deploy this on a server, we suggest you just run

```
gulp prod
```
Which will generate a folder called prod, containing all needed files to be deployed on the server.

That's it, you're good to go!



####Credits
**Benjamin Chareyron** - *Project Manager, Social Media Strategist*

**Paul Gabriel** - *Back-End Developer*

**Theo Kleman** - *Lead Front-End Developer & Designer*

**Matthieu Tourdes** - *Motion Designer & 3D Modelist*

**William Praszenzinski** - *Front-End Developer & Designer*