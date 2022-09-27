# Display images from a hidden eprint in a tile within an xpage

- Add the following code to the xpage file  
  
```XML
  <div id="image-tile"></div>
  <script type="text/javascript">
    new Ajax.Updater('image-tile',"/cgi/image_tile", {parameters:"eprint_id=XXXX"});
  </script>
```  

- Replace XXXX with the eprintid of the item containing the documents you wish to display
- The item should have 16 images as standard
- A limit can be set if the amount of images is different

```XML
  <div id="image-tile"></div>
  <script type="text/javascript">
    new Ajax.Updater('image-tile',"/cgi/image_tile", {parameters:"eprint_id=XXXX&amp;limit=X"});
  </script>
```

- The documents title and related eprint id should go in the formatdesc / description field separated by an @  
`Test title@7` for example.   


## TODO  
- Randomly populate the squares from the documents within the eprint   
- Utilize caching of citations   
- Non curated mode, where applicable documents are pulled from a recent selection of eprints  



Authors:
- Edward Oakley, EPrints Services

Developed as part of [UCA Research Online](https://research.uca.ac.uk/) rebrand (2022)  

EPrints 3.4 is supplied by EPrints Services.  
The files contained within this directory are all Copyright 2022 University of Southampton.  
