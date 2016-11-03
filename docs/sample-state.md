```js
{
  currentUser: {
    id: 1,
    username: "truman-burbank"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createBill: {errors: ["Description can't be blank"]}
  },
  bills: {
    1: {
      title: "6 pack",
      payer_id: 2,
      date: "Jan 8 1998",
      split_type: "percent",
      doc_url: "",
      split_with: {
        1: {
          username: "truman-burbank",
          email: "truman@burbankgalaxy.com"
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
}
```
