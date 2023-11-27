import https       from "node:https";

var baseUrl = "https://dummyjson.com/"

https.get(baseUrl + "products/categories/", response => {
  var categoriesRawData = "";
  response.on("data", data => {
    categoriesRawData += data;
  });

  response.on("end", () => {
    var categories = JSON.parse(categoriesRawData);
    https.get(baseUrl + "products/category/" + categories.at(0), response => {
      var categoryData = "";
      response.on("data", data => {
        categoryData += data;
      });

      response.on("end", () => {
        var category = JSON.parse(categoryData);
        https.get(baseUrl + "products/" + category.products.at(0).id, response => {
          var productsRaw = "";
          response.on("data", data => {
            productsRaw += data;
          });

          response.on("end", () => {
            var products = JSON.parse(productsRaw);
            console.log(products);
          });
        });
      })
    });
  });
});
