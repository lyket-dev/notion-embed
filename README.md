This is a solution to embed [Lyket](https://lyket.dev/) to [`Notion`](https://notion.so).

With this solution you can create Lyket buttons just by navigating to a path "/like-button/[button-namespace]/[button-id]"

Read more about what Lyket buttons need to be created [here](https://lyket.dev/docs/react)

You can see a demo of what it looks like [like-button](https://lyket-notion-embed.vercel.app/like-button/all/my-button) | [updown-button](https://lyket-notion-embed.vercel.app/updown-button/all/my-button) | [clap-button](https://lyket-notion-embed.vercel.app/clap-button/all/my-button)

## Getting Started

First, [register on Lyket](https://app.lyket.dev/signup) to get your personal API key.

Then you need to fork this repo and deploy it to a serverless platform such as Vercel or Netlify.

If you want to experiment a little before deploying it, clone it and add your personal API key in NEXT_PUBLIC_LYKET_API_KEY to .env.local

## Deploy on Vercel

The easiest way to deploy your Lyket widget app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), choose your repo and deploy.

Remember to add your personal API key as environment variable in your Vercel app settings [/settings/environment-variables]. Use the name NEXT_PUBLIC_LYKET_API_KEY.

Trigger a new deploy to apply the changes.

## See the buttons on Notion

Now you can use the address of your deployed app to create Lyket buttons in an iframe or Notion.

For example:

- https://my-app/like-button/my-blog/my-post will create a like button with namespace my-blog and my-post as ID
- https://my-app/clap-button/my-blog/my-post will create a clap button with namespace my-blog and my-post as ID
- https://my-app/updown-button/my-blog/my-post will create a updown button with namespace my-blog and my-post as ID

To see the buttons on Notion simply copy the link in Notion and then choose _Create embed_ from the option list

## Customise buttons

This repo contains the most basic version of Lyket, but Lyket gives a great choice of customisation!
To learn more on how to customise your buttons, take a look at the following resources:

- [Lyket React Documentation](https://lyket.dev/docs/react) - learn about all Lyket features.
- [Create a like button](https://lyket.dev/blog/react-like-button) - Create a React like button.
- [Create a clap button](https://lyket.dev/blog/react-clap-button) - Create a React clap button.
- [Create a like-dislike button](https://lyket.dev/blog/react-like-dislike-button) - Create a React like-dislike button.
