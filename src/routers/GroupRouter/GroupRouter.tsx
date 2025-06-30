import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GroupListPage, GroupPage } from "src/pages";
import { ContactAndGroupPageProps } from "src/pages/types";

export const GroupRouter: FC<ContactAndGroupPageProps> = ({ contactsState, groupContactsState }) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<GroupListPage groupContactsState={groupContactsState} />}
        />
        <Route
          path=":groupId"
          element={
            <GroupPage
              contactsState={contactsState}
              groupContactsState={groupContactsState}
            />
          }
        />
      </Routes>
    </>
  );
};
