# Display images from a hidden eprint in a tile within an xpage

- Add the following code to the xpage file  
  
```XML
  <div id="image-tile"></div>
  <script type="text/javascript">
    new Ajax.Updater('image-tile',"/cgi/image_tile", { parameters:"eprint_id=XXXX"});
  </script>
```  

- Replace XXXX with the eprintid of the item containing the documents you wish to display
- The item should have 16 images


Authors:
- Edward Oakley, EPrints Services
