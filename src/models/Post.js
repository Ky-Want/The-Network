export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds

    this.creator = data.creator
  }





  get editPostForm() {
    return /* HTML */ `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
<h5 class="modal-title" id="editModalLabel">New message</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
<form>
  <div class="mb-3">
    <label for="message-text" class="col-form-label"></label>
    <textarea class="form-control" id="message-text">{{post.body}}</textarea>
  </div>
</form>
    </div>
    <div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save Changes</button>
    </div>
  </div>
</div>
    `
  }
}