```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Truman Burbank",
      email: "truman@burbankgalaxy.com",
    },
    errors: ["Password too short"]
  },
  bills: {
    "May 2016": {
      13: {
        title: "6 pack",
        author: {
          id: 1,
          username: "Truman Burbank"
        }
        payer_id: 2,
        month: "Jan",
        day: "08",
        split_type: "percent",
        doc_url: "",
        split_with: {
          1: {
            user_id: 2,
            username: "Marlon"
          },
          2: {
            user_id: 1,
            username: "Truman Burbank"
          }
        },
        category: {
          1: {
            id: 14,
            name: "Liquor",
            parent_id: 1
          }
        }
        comments: {
          1: {
            body: "Golf night on bridge construction site"
          }
        }
      }
    },
    errors: ["Description can't be blank"]
  },
}
```
