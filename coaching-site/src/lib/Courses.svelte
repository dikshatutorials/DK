<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"
></script>

<div class="courses">
  <div class="course-container">
    <h3 class="course-title">Courses</h3>
    <div class="course-list row">
      <div class="col-sm-6">
        <!-- Card1 -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Classes from 5th to 10th (CBSE)</h5>
            <p class="card-text">
              Covering the all syllabus of the class 5 to 10 including
              additional subjects
            </p>
            <a href="*" class="btn btn-primary">Buy</a>
            <a href="*" class="btn btn-primary">Learn more</a>
          </div>
        </div>

        <!-- Card2 -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Classes from 5th to 10th (JAC)</h5>
            <p class="card-text">
              Covering the all syllabus of the class 5 to 10 including
              additional subjects
            </p>
            <a href="*" class="btn btn-primary">Buy</a>
            <a href="*" class="btn btn-primary">Learn more</a>
          </div>
        </div>

        <!-- Card3 -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Classes from 5th to 10th (ICSE)</h5>
            <p class="card-text">
              Covering the all syllabus of the class 5 to 10 including
              additional subjects
            </p>
            <a href="*" class="btn btn-primary">Buy</a>
            <a href="*" class="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="facilities">
    <h2 class="heading">Facilities Avaliable For Students</h2>
    <ul>
      <li class="facilities-item">Seperate Batches for boys and girls</li>
      <li class="facilities-item">Attendence on regular basis</li>
      <li class="facilities-item">Recorded Lectures For Each Subject</li>
      <li class="facilities-item">Doubt Clearing Sessions</li>
      <li class="facilities-item">Weekly Test</li>
      <li class="facilities-item">Monthly Test</li>
      <li class="facilities-item">Revision Classes</li>
      <li class="facilities-item">Special Classes for weak students</li>
    </ul>
  </div>
</div>

<style lang="css3">
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");

  .courses {
    padding: 1rem;
    background: #b67a31;
    color: #f1f1f1f1;
    width: 100%;
    background: rgba(0, 0, 0, 0.6) url("../assets/images/bg.jpeg") no-repeat
      center center fixed;
    background-size: cover;
    background-blend-mode: darken;
  }
  .course-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .course-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .course-list {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin: 1rem auto;
    border-radius: 0.2rem !important;
    background: #c95cff9c;
    color: #f1f1f1f1;
  }
  .card .btn {
    border-radius: 0.2rem !important;
  }

  .facilities {
    margin: 0 10%;
    padding: 2rem 0;
  }

  .facilities-item {
    margin: 1rem 0;
    font-size: 1.2rem;
    list-style-type: decimal;
  }

  .heading {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
</style>
