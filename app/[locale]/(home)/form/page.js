"use client";
import { componentsList, getFormSchema } from "@/lib/data";
import { useState } from "react";

export default function Form() {
  // State to store the form data
  const [formData, setFormData] = useState({});
  // State to store dynamic components
  const [dynamicComponents, setDynamicComponents] = useState({});

  // Function to handle form submission
  function onSubmit(event, componentId) {
    event.preventDefault();

    // Extract form data
    const data = new FormData(event.currentTarget);
    const entries = Object.fromEntries(data.entries());

    const structuredData = {};

    // Structure form data into nested objects
    for (const [key, value] of Object.entries(entries)) {
      const keys = key.split("_");

      let current = structuredData;
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          current[keys[i]] = value;
        } else {
          current[keys[i]] = current[keys[i]] || (isNaN(Number(keys[i + 1])) ? {} : []);
          current = current[keys[i]];
        }
      }
    }

    // Update the formData state
    setFormData((prev) => ({
      ...prev,
      [componentId]: structuredData,
    }));

    console.log("structuredData: ", structuredData);
  }

  console.log("form data: ", formData);

  // Function to add a new dynamic component form
  const addComponentForm = (componentId) => {
    const formSchema = getFormSchema(componentId);
    console.log("formSchema: ", formSchema);

    setDynamicComponents((prev) => ({
      ...prev,
      [componentId]: (prev[componentId] || []).concat(formSchema),
    }));
  };

  return (
    <div>
      <h1>Dynamic form:</h1>
      {componentsList.map((component) => (
        <div key={component.id} className="m-12">
          <h1 className="mb-4">{component.name}</h1>
          <form className="max-w-sm mx-auto" onSubmit={(e) => onSubmit(e, component.id)}>
            {component.attribute.map((item) =>
              item.type === "component" ? (
                <div key={item.name}>
                  <div id={item.name + "_container"}>
                    {(dynamicComponents[item.componentId] || []).map((schema, index) => (
                      <div className="relative z-0 w-full mb-5 group" key={index}>
                        <h1>
                          {schema.name} {index}
                        </h1>

                        {schema.attribute.map((item) => (
                          <div className="relative z-0 w-full mb-5 group" key={item.name}>
                            <input
                              type={item.type}
                              name={schema.name.toLowerCase() + "_" + index + "_" + item.name}
                              id={item.name}
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=""
                            />
                            <label
                              htmlFor={item.name}
                              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-4"
                    onClick={() => addComponentForm(item.componentId)}
                    type="button"
                  >
                    Add {item.name}
                  </button>
                </div>
              ) : (
                <div className="relative z-0 w-full mb-5 group" key={item.name}>
                  <input
                    type={item.type}
                    name={item.name}
                    id={item.name}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                  />
                  <label
                    htmlFor={item.name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {item.label}
                  </label>
                </div>
              )
            )}
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
