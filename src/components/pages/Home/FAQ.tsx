import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      title: "What we do?",
      content: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We connect farmers with buyers. We provide a platform for small and
            large farmers to sell their product and services to buyers.
          </p>
        </div>
      ),
    },
    {
      title: "Why we do it?",
      content: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm lg:mb-4">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-full">
        <Accordion alwaysOpen={true}>
          {faqs.map((faq, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="w-full">{faq.title}</Accordion.Title>
              <Accordion.Content>{faq.content}</Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
