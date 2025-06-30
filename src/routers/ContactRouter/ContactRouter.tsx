import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactListPage, ContactPage } from "src/pages";
import { ContactAndGroupPageProps } from "src/pages/types";

export const ContactRouter: FC<ContactAndGroupPageProps> = ({ contactsState, groupContactsState }) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <ContactListPage
              contactsState={contactsState}
              groupContactsState={groupContactsState}
            />
          }
        />
        <Route
          path=":contactId"
          element={<ContactPage contactsState={contactsState} />}
        />
      </Routes>
    </>
  );
};
