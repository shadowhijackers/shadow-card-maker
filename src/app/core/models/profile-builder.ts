export class SocialMediaLinks {
  facebook: string;
  linkedIn: string;
  twitter: string;
  youtube: string;
  instagram: string;
}

export class Contact {
  phoneNo: string;
  whatsAppNo: string;
  email: string;
  address: string;
  website: string;
}

export interface ProfileInfo {
  id: string;
  displayName: string;
  headlineName: string;
  coverImgSrc: string;
  logoImgSrc: string;
  description: string;
  contact: Contact;
  galleries: Array<string>;
  videos: Array<string>;
  socialMediaLinks: SocialMediaLinks;
}

export abstract class ProfileInfoImpl implements ProfileInfo {
  id: string;
  contact: Contact;
  coverImgSrc: string;
  description: string;
  displayName: string;
  galleries: Array<string>;
  headlineName: string;
  logoImgSrc: string;
  videos: Array<string>;
  socialMediaLinks: SocialMediaLinks;

  setDisplayName(displayName: string) {
    this.displayName = displayName;
    return this
  }

  setHeadLineName(headLineName: string) {
    this.headlineName = headLineName;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setCoverImgSrc(coverImgSrc: string) {
    this.coverImgSrc = coverImgSrc;
    return this;
  }

  setLogoImgSrc(logoImgSrc: string) {
    this.logoImgSrc = logoImgSrc;
    return this;
  }

  setContact(contact: Contact) {
    if (!contact) return this;

    this.contact = {} as Contact;
    this.contact.phoneNo = contact?.phoneNo;
    this.contact.whatsAppNo = contact?.whatsAppNo;
    this.contact.email = contact?.email;
    this.contact.website = contact?.website;
    this.contact.address = contact?.address;
    return this;
  }

  setGalleries(galleries: Array<string>) {
    if (!Array.isArray(galleries) || galleries.length > 0) return this;

    this.galleries = galleries;
    return this;
  }

  setVideos(videos: Array<string>) {
    if (!Array.isArray(videos) || videos.length > 0) return this;

    this.videos = videos;
    return this;
  }

  setSocialMediaLinks(socialMediaLinks: SocialMediaLinks) {
    if (!socialMediaLinks) return this;

    this.socialMediaLinks = {} as SocialMediaLinks;
    this.socialMediaLinks.facebook = socialMediaLinks?.facebook;
    this.socialMediaLinks.instagram = socialMediaLinks?.instagram;
    this.socialMediaLinks.twitter = socialMediaLinks?.twitter;
    this.socialMediaLinks.youtube = socialMediaLinks?.youtube;
    this.socialMediaLinks.linkedIn = socialMediaLinks?.linkedIn;
    return this;
  }

  abstract build(): ProfileInfoImpl;
}

export class ProfileInfoBuilder extends ProfileInfoImpl {
  constructor(id: string) {
    super();
    this.id = id;
  }

  build() {
    return this
  }
}
