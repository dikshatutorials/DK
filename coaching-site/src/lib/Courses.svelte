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
</div>

<style lang="css3">
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");

  .courses {
    padding: 1rem;
    background: #b67a31;
    color: #f1f1f1f1;
    width: 100%;
    background: rgba(0,0,0,0.6) url("../assets/images/bg.jpeg") no-repeat center center fixed;
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
</style>
