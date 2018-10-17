To generate the logos:

    rsvg-convert -a -w 600 -h 225 logo-igalia.svg > logo-igalia-tmp.png
    convert -background none -resize 600x225 -gravity center -extent 600x225 logo-igalia-tmp.png logo-igalia-video.png
