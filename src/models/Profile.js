export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg

    this.email = data.email
    this.github = data.github
    this.class = data.class
    this.graduated = data.graduated
  }
}