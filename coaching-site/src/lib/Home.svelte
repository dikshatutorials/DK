<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"
></script>

<div class="home">
    <div class="home-text-part">
        <h1>Diksha Tutorials Coaching Center</h1>
        <h4>
            One of the best coaching center in the city. We provide the best
            education to the students. We have the best teachers in the city.
        </h4>

        <a href="*">
            <button class="btn">Know More</button>
        </a>
    </div>
</div>

<style lang="css3">
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: rgba(0,0,0,0.5) url("../assets/images/bg.jpeg") no-repeat center center/cover fixed;
        background-blend-mode: darken;
    }
    .home-text-part {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .home-text-part h1 {
        color: #ffffff;
        font-size: 3rem;
        font-weight: 500;
    }
    .home-text-part h1::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: #ffffffa1;
        margin: 20px auto;
    }

    .home-text-part h4 {
        color: #ffffffa2;
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
    }
    .home-text-part .btn {
        margin-top: 20px;
        background: #ffffffa2;
        border-radius: .2rem !important;
        width:150px;
    }
    @media screen and (max-width: 680px) {
        .home-text-part {
            width: 80%;
            height: 80%;
        }
        .home-text-part h1{
            font-size: 2rem;
        }
        .home-text-part h4{
            font-size: 1rem;
            text-align: left;
        }
    }
</style>