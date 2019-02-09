const editJsonFile = require("edit-json-file");
const watcher = require("./core/watcher");
const mdFileParser = require('front-matter')
const jetpack = require('fs-jetpack')
const {removeExtension, titleCaseText} = require('./utils')

const blogContentDir = `contents/blog`
const blogJsonDir = `data`
const postsArray = []

const blogContentSrc = jetpack.cwd(blogContentDir);
const blogContentApi = jetpack.cwd(blogJsonDir);
const blogContentWatcher = watcher.create(`./${blogContentDir}`)

blogContentWatcher.on('ready', function() {
  console.log('ready')
  initialWrite();
})

blogContentWatcher.on('change', (filepath, root, stat) => {
    const jsonState = blogContentApi.read('blog.json', 'json');
    const updatedPostDataObject = createDataObject(filepath)
    
    const postObjectIndex = jsonState.findIndex( post => post.slug === updatedPostDataObject.slug );
    const newJsonState = updateArrayState(jsonState, postObjectIndex, updatedPostDataObject)
    blogContentApi.write('blog.json', newJsonState)
})


function initialWrite() {
    const mdFilesArray = blogContentSrc.find({ matching: ['*.md'] });

    // Add the data to the postsArray variable we setup initially
    mdFilesArray.forEach(mdFile => {
        const postDataObject = createDataObject(mdFile)
        postsArray.push(postDataObject)
    });

    // Writing the data to the data/blog.json file
    blogContentApi.write('blog.json', postsArray)
}



function createDataObject(mdFile) {
    const mdFileData = mdFileParser(blogContentSrc.read(mdFile))

    // If slug is not set, automatically generate it from the filename by removing the extension
    const slug = mdFileData.attributes.slug
        ? mdFileData.attributes.slug
        : removeExtension(mdFile)        

    // If title is not set, automatically generate it from the slug
    const title = mdFileData.attributes.title
        ? mdFileData.attributes.title
        : titleCaseText(slug)

    return {
        title,
        slug,
        markdown: mdFileData.body,
        ...mdFileData.attributes
    }                  

}


function updateArrayState(array, index, newObjectValue) {
  const ret = array.slice(0);
  ret[index] = newObjectValue;
  return ret;
}


/* --------------------------------------------------------------------- */

    // const parsedPosts = posts.map(article => mdFileParser(article))
    // console.log(parsedPosts)   




/* --------------------------------------------------------------------- */




// // If the file doesn't exist, the content will be an empty object by default.
// let file = editJsonFile(`${__dirname}/foo.json`);
 
// // Set a couple of fields
// file.set("planet", "Earth");
// file.set("name.first", "Johnny");
// file.set("name.last", "B.");
// file.set("is_student", false);
 
// // Output the content
// console.log(file.get());
// //   name: { first: 'Johnny', last: 'B.' },
// //   is_student: false }
 
// // Save the data to the disk
// file.save();
 
// // Reload it from the disk
// file = editJsonFile(`${__dirname}/foo.json`, {
//     autosave: true
// });
 
// // Get one field
// console.log(file.get("name.first"));
// // => Johnny
 
// // This will save it to disk
// file.set("a.new.field.as.object", {
//     hello: "world"
// });
 
// // Output the whole thing
// console.log(file.toObject());
// { planet: 'Earth',
//   name: { first: 'Johnny', last: 'B.' },
//   is_student: false,
//   a: { new: { field: [Object] } } }