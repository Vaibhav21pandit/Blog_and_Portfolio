---
title: Building a wallpaper generator with HTML, CSS and Python 
tags: [Python,CSS,HTML]
date: 2020-12-29
path: blog/building-wallpaper-generator
cover: ./cover.png
excerpt: A random wallpaper generator.
---
So I've been inactive for a few days and haven't posted anything new which is due to not finding anything interesting to write about but here's a fun toy project that you can tinker with that I made in 2 hours or so.

This is a wallpaper generator made with HTML,CSS and Python.It uses random images taken from the picsum website put together in a collage with HTML and CSS and then the webpage is converted to an image using the htmltoimage API in Python(you can do this in almost any other language too). If you want to dive into the code directly HERE's the link to the repo but please read the instructions about the API below first. I am sure there are better ways to do this but I had this in mind at the time and it was really short and fun so bear with me.

You just need working  knowledge of HTML + CSS and familiarity with python will do.So let's get down to building this now, First we need to get images from picsum website and display them on a webpage for which we are using the <img> tag inside the <div> tag and the source for the img tag should be passed as "https://picsum.photos/200/300?t=1" where a 200x300 dimensional image is fetched from the picsum website and we are specifying an argument "t" so that the different images we fetch are not the same by chance(since it returns random images).I'm using 5 of these images, you can use any number you want just make sure the total width fits the width of the screen.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Wallpaper Generator</title>
    <body>
    <div>
      <div>
        <img src="https://picsum.photos/200/300?t=1">
        <img src="https://picsum.photos/200/300?t=2">
        <img src="https://picsum.photos/200/300?t=3">
        <img src="https://picsum.photos/200/300?t=4">
        <img src="https://picsum.photos/200/300?t=7">
      </div>
    </div>
  </body>
</html>

```

You should see 5 pictures lined up like this in your browser when you run your html file.
<div>
<img src='https://github.com/Vaibhav21pandit/wallpaper-generator/blob/main/screenshot.png?raw=True'>
</div>

\
Next we are going to style our wallpaper by centering the images and putting a margin between the images with the following code.

```css
html,body{
  margin: 0;
  padding: 0;
}

.container{
  height: 100vh;
  width: auto;
  display: grid;
  place-items: center;
  background-color: rgb(8, 8, 8);
  /* background: linear-gradient( white black); */
}
.pic-ctn{
  display: flex;
  justify-content: center;
}

.pic{
  margin: 5px;
}

```
and then we link our corresponding default.css file plus define the classes for the corresponding components like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="imgkit-format" content="png"/>
    <meta name="imgkit-orientation" content="Portrait"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Wallpaper Generator</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="default.css">
  </head>
  <body>
    <div class="container">
      <div class="pic-ctn">
        <img src="https://picsum.photos/200/300?t=1" alt="" class="pic">
        <img src="https://picsum.photos/200/300?t=2" alt="" class="pic">
        <img src="https://picsum.photos/200/300?t=3" alt="" class="pic">
        <img src="https://picsum.photos/200/300?t=4" alt="" class="pic">
        <img src="https://picsum.photos/200/300?t=7" alt="" class="pic">
      </div>
    </div>
  </body>
</html>

```
\
Now your page should look like this:
\

<div>
<img src='https://github.com/Vaibhav21pandit/wallpaper-generator/blob/main/Wallpaper-1.png?raw=True'>
</div>
\

To change the background color, change the corresponding property in the css file where it says container.

Now it's time to convert the page into image. I tried different approaches for this one was to convert html→pdf→ image but that is not a good idea, next I tried using imgkit package, while it just works for the conversion, the image quality is not really the best you can get.

So I went around looking for an alternative and found htmlcsstoimage's website where you can convert the pages to .png or .jpg with help of their developer API.

Head over to the website and create a developer account, in your dash board you will see your User-ID and  API-key, copy them down,create a file and name it keys.json, then store your keys in the following manner.

```json
{
  "user-id":"your_user_id",
  "api-key":"your_api_key"
}

```
now we start with our python code.In the below snippet I have created a function named html_to_image which takes the following arguments:

1. url:the endpoint of htmlcsstoimages website which we want to hit for converting our wallpapers
2. user_id: the user_id value showing in your dashboard
3. api_key: the api_key value showing in your dashboard
4. html_path: the path to your html file
5. css_path: the path to your html file

```py
import requests
import os
import random
import json

def html_to_image(url,user_id,api_key,html_path,css_path):
  with open(html_path,'r') as f:
    html=f.read()
    f.close()

  with open('./default.css','r') as f:
    css=f.read()
    f.close()

  data = { 'html': html,
          'css': css,
          'google_fonts': "Roboto" }

  image = requests.post(url = HCTI_API_ENDPOINT, data = data, auth=(HCTI_API_USER_ID, HCTI_API_KEY))

  print("Your image URL is: %s"%image.json()['url'])

  choice=random.choice(range(0,300,1))

  os.system(f'wget -O ./wallpapers/{choice}.png {image.json()["url"]}')




if __name__=="__main__":
  with open("keys.json","r") as f:
    args=json.load(f)
    print(args["api-key"])
  HCTI_API_ENDPOINT = "https://hcti.io/v1/image"
# Retrieve these from https://htmlcsstoimage.com/dashboard
  HCTI_API_USER_ID = args["user-id"]
  HCTI_API_KEY =args["api-key"]
  html_to_image(url=HCTI_API_ENDPOINT,user_id=HCTI_API_USER_ID,api_key=HCTI_API_KEY,html_path='./index.html',css_path='./default.css')

```

here we are reading data from our html and css files and passing them to a requests function which requests the API for conversion. It returns a url from which we can download our image, next we choose a random integer from 0 to 3000 to name our image file so as to minimize name conflicts(dumb strategy, I know of better solutions but fuck it I like this one for now).Now we use the os.system to execute a bash command to download our file and save it to the directory of our choice.

This downloads our file and we can now use it as our wallpaper. You can also set this up as a cron job and do other cool stuff with this like use it with [Wallch](https://launchpad.net/wallpaper-changer) and update wallpaper periodically.

So that's it for this post.

Goodbye, for now 👋.
