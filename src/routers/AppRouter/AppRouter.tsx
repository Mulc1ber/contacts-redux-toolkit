import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { MainLayout } from "src/layout";
import { ContactListPage, FavoritListPage } from "src/pages";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ContactRouter } from "../ContactRouter/ContactRouter";
import { GroupRouter } from "../GroupRouter/GroupRouter";

export const AppRouter = () => {
  const contactsState = useState<ContactDto[]>(DATA_CONTACT);
  const favoriteContactsState = useState<FavoriteContactsDto>([
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ]);
  const groupContactsState = useState<GroupContactsDto[]>(DATA_GROUP_CONTACT);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
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
          path="/contact/*"
          element={
            <ContactRouter
              contactsState={contactsState}
              groupContactsState={groupContactsState}
            />
          }
        />

        <Route
          path="/groups/*"
          element={
            <GroupRouter
              contactsState={contactsState}
              groupContactsState={groupContactsState}
            />
          }
        />

        <Route
          path="/favorit"
          element={
            <FavoritListPage
              favoriteContactsState={favoriteContactsState}
              contactsState={contactsState}
            />
          }
        />

        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};
