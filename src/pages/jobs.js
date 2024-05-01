import React from "react";

import { DiscordAuth } from "@components/DiscordAuth";

import { Layout, Link, Modal } from "@components";
import JobSearch from "../components/JobSearch";

const Jobs = () => {
  const [showModal, setModal] = React.useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  return (
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
            <p>
              If the job post does not contain a dedicated email, link, or phone
              number, you can click either the offer date to open the original
              message in our{" "}
              <Link href="https://discord.gg/R942bNb">
                <strong>#job-board</strong> channel
              </Link>
              , or the name of the user that posted the job. You can then
              contact the person by sending them a direct message.
            </p>
            <p>
              If you don’t already have one, you will need to create a (free!){" "}
              <Link href="https://discord.com/">Discord</Link> account.
            </p>
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default Jobs;
