import React from "react";
import { Form, redirect } from "react-router";
export function CourseCreatePage() {
  return (
    <Form method="post">
      <label>
        title
        <input type="text" name="title" />
      </label>
      <label>
        image:
        <input type="text" name="image" />
      </label>
      <label>
        description:
        <input type="text" name="description" />
      </label>
      <button type="submit">Save</button>
    </Form>
  );
}

export async function createCourse({ request }) {
  const formData = await request.formData();

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    description: formData.get("description"),
  };

  // Example: Send to your API
  await fetch("http://localhost:5000/courses", {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(eventData),
  });

  // Redirect the user after success
  return redirect("/courses");
}
