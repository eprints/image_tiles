# Display images from a hidden eprint in a tile within an xpage


## Basic Config - Tile curation mode 
This configuration allows you to curate the images shown in the tiles, you will need to create an item which contains images and then provide each document with a title and link. Instructions below.  


1. Make sure you have added this ingredient to the flavour/FLAVOUR_DIR/inc file as `ingredients/image_tiles`.
2.  Add the first XML markup example snippet (below instructions) to the xpage file where you would like the tile to be displayed. 
3. Create an item (of any type) and add 16 images (number configurable) to the eprint. Note that items are reduced to a square so you should optimize the image before upload if a specific portion of the image is desired.
4. For each item add the title and the tile link split by an `@` symbol into the format description field. Like this... `Tile Title@5128` if going to an eprint OR Like this... `Tile Title@https://external.site.com/page.html`.  
5. Make the item live by depositing.
6. Replace XXXX in the xpage code (eprint_id parameter) with the eprintid of the item containing the documents you wish to display. The following are all optionally configurable extras. If you wish to see the result, (when appropriate) reload apache.
7. Optionally you can set a new limit if the amount of images is different. See example sippet below with an added argument. To show a random selection of images from a larger pool intentionally set the limit lower than the number of documents added.
8. If you wish to make the documents display in a random order, add the random parameter equal to 1. Seen in the 3rd XML snippet. 

```XML
  <div id="image-tile"></div>
  <script type="text/javascript">
    new Ajax.Updater('image-tile',"/cgi/image_tile", {parameters:"eprint_id=XXXX"});
  </script>
```
  
```XML
  <div id="image-tile"></div>
  <script type="text/javascript">
    new Ajax.Updater('image-tile',"/cgi/image_tile", {parameters:"eprint_id=XXXX&amp;limit=X"});
  </script>
```

```XML
<div id="image-tile"></div>
<script type="text/javascript">
  new Ajax.Updater('image-tile',"/cgi/image_tile", {parameters:"eprint_id=XXXX&amp;limit=21&amp;random=1"});
</script>
```

## Non-curated mode 

```XML
<style> .tile { --stagger-delay: 0ms; } </style>
<div id="image-tile"></div>
<script type="text/javascript">
  new Ajax.Updater('image-tile',"/cgi/image_tile.all", {parameters:"limit=16&amp;random=1"});
</script>
```


## Parameters

| parameter | argument | outcome |
| ----------- | ----------- | ----------- |
| eprint_id | natural numeric | i.e. linking to your.repo.ac.uk/234 |
| limit | natural numeric | sets the limit for the number of |
| random | 0 or 1 | from the images attached to the item display them in a random order |


## TODO  
- Utilize caching of citations   
- Non curated mode, where applicable documents are pulled from a recent selection of eprints  



### Authors:
- Edward Oakley, EPrints Services

Developed as part of [UCA Research Online](https://research.uca.ac.uk/) rebrand (2022). Example seen on their homepage. 

EPrints 3.4 is supplied by EPrints Services.  
The files contained within this directory are all Copyright 2022 University of Southampton.  
