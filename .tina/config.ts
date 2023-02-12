import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "3afb981c-58f6-4e00-9cb5-ba14dda6b742", // Get this from tina.io
  token: "5f697fd7a0aac96c30c07ab43ac24a2867e3f04c", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "upload",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            draft: false,
          };
        },
        fields: [
          {
            name: "draft",
            label: "Draft",
            type: "boolean",
            required: true,
            description: "If this is checked the post will not be published",
          },
          {
            type: "image",
            label: "Cover Image",
            name: "cover",
          },
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["authors"], // points to a collection with the name "author"
          },
          {
            label: "Tags",
            name: "tag",
            type: "reference",
            collections: ["tags"], // points to a collection with the name "author"
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            required: true,
            type: "string",
            name: "overview",
            label: "Content Overview",
            description: "Add overview website here",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        label: "Authors",
        name: "authors",
        path: "content/authors",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            label: "Avatar",
            name: "avatar",
          },
        ],
      },
      {
        label: "Tags",
        name: "tags",
        path: "content/tags",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Tags Name",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "content/projects",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title Project",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "description",
            required: true,
          },
          {
            label: "Tags",
            name: "tag",
            type: "reference",
            collections: ["tags"],
          },
          {
            type: "string",
            name: "link",
            label: "Link",
            required: true,
          },
        ],
      },
    ],
  },
});
