import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { DiscordAuth } from "@components/DiscordAuth";

import { Layout, Link, Modal } from "@components";
import JobSearch from "../components/JobSearch";

const queryClient = new QueryClient();

const Jobs = () => {
  const [showModal, setModal] = React.useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="Jobs" largeTitle sidebar>
        {(setSidebar) => (
          <>
            <h1>
              Reactiflux <span>Jobs</span>
            </h1>
            <DiscordAuth>
              <JobSearch toggleModal={toggleModal} setSidebar={setSidebar} />
            </DiscordAuth>
            <Modal close={() => setModal(false)} isOpen={showModal}>
              <h4>How do I apply?</h4>
              <p>
                If the job post does not contain a dedicated email, link, or
                phone number, you can click either the offer date to open the
                original message in our <code>#job-board</code> channel , or the
                name of the user that posted the job. You can then contact the
                person by sending them a direct message.
              </p>
            </Modal>
          </>
        )}
      </Layout>
    </QueryClientProvider>
  );
};

export default Jobs;
