import { FcBinoculars, FcApproval, FcBullish } from "react-icons/fc"

import Hero from "../components/Home/Hero"

const styles = {
  homePageSubtitle: ` font-body text-center text-2xl my-4 `,
  homePageBottomSection: `flex justify-center items-center gap-3`,
  homePageBottomSectionItem: `max-w-sm text-center p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700`,
  homePageBottomSectionItemActive: `max-w-sm text-center bg-blue-100 p-6 rounded dark:bg-gray-700`,
  homePageBottomSectionItemIcons: `mx-auto`,
  homePageBottomSectionItemTitle: `mb-2 text-2xl font-semibold tracking-tight  text-gray-900 dark:text-white`,
  homePageBottomSectionItemText: `mb-3 font-normal text-gray-500 dark:text-gray-400`,
}

const HomePage = () => (
  <>
    <Hero />
    <h2 className={styles.homePageSubtitle}>Searching 😕 for new Role?</h2>
    <section className={styles.homePageBottomSection}>
      <div class={styles.homePageBottomSectionItem}>
        <FcBinoculars
          className={styles.homePageBottomSectionItemIcons}
          size={80}
        />

        <a href={styles.homePageBottomSectionItem}>
          <h5 class={styles.homePageBottomSectionItemTitle}>
            Search for opportunity.
          </h5>
        </a>
        <p class={styles.homePageBottomSectionItemText}>
          Search in, and find your opportunity with top offers from developers
          for developer.
        </p>
      </div>
      <div class={styles.homePageBottomSectionItemActive}>
        <FcApproval className="mx-auto" size={80} />
        <a href="">
          <h5 class={styles.homePageBottomSectionItemTitle}>
            Apply for new role or scholarship
          </h5>
        </a>
        <p class={styles.homePageBottomSectionItemText}>
          We are here to provide the best Opportunities for Computer Seaince
          Students.
        </p>
      </div>
      <div class={styles.homePageBottomSectionItem}>
        <FcBullish className="mx-auto" size={80} />

        <a href="">
          <h5 class={styles.homePageBottomSectionItemTitle}>
            Start your New life.
          </h5>
        </a>
        <p class={styles.homePageBottomSectionItemText}>
          Let's begin, we help you to achieve your Goals as fast as you can.
        </p>
      </div>
    </section>
  </>
)

export default HomePage
