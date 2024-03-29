export type INavLink = {
  imgUrl: string;
  route: string;
  label: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imgUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: string;
  file: File[];
  location?: string;
  tags?: string;
};
