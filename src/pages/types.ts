import { State } from "src/types/common";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface ContactPageProps {
  contactsState: State<ContactDto[]>;
}

export interface GroupPageProps {
  groupContactsState: State<GroupContactsDto[]>;
}

export interface FavoritListPageProps {
  favoriteContactsState: State<FavoriteContactsDto>;
  contactsState: State<ContactDto[]>;
}

export interface ContactAndGroupPageProps {
  contactsState: State<ContactDto[]>;
  groupContactsState: State<GroupContactsDto[]>;
}
