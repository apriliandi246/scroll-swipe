const HTML_TEXT_BUTTON_NAVIGATIONS = `
   <div class="mys-multiscroll-nav">
      <button type="button" aria-label="to slide 0" data-mys-multiscroll-nav="0" class="mys-multiscroll-nav__btn mys-multiscroll-nav__btn--active"></button>
      <button type="button" aria-label="to slide 1" data-mys-multiscroll-nav="1" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 2" data-mys-multiscroll-nav="2" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 3" data-mys-multiscroll-nav="3" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 4" data-mys-multiscroll-nav="4" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 5" data-mys-multiscroll-nav="5" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 6" data-mys-multiscroll-nav="6" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 7" data-mys-multiscroll-nav="7" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 8" data-mys-multiscroll-nav="8" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 9" data-mys-multiscroll-nav="9" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 10" data-mys-multiscroll-nav="10" class="mys-multiscroll-nav__btn"></button>
      <button type="button" aria-label="to slide 11" data-mys-multiscroll-nav="11" class="mys-multiscroll-nav__btn"></button>
   </div>
`.trim();

const HTML_TEXT_SLIDES = `
<main class="mys-multiscroll-slide-container" id="mys-multiscroll-slide-container">
   <!-- Slide 0 -->
   <div aria-hidden="false" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide" style="z-index: 1">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 0%, 0)">
         <div class="mys-multiscroll-slide__content slide-0-left">Slide 0 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 0%, 0)">
         <div class="mys-multiscroll-slide__content slide-0-right">Slide 0 Right</div>
      </div>
   </div>
   <!-- Slide 0 -->

   <!-- Slide 1 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 100%, 0)">
         <div class="mys-multiscroll-slide__content slide-1-left">Slide 1 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -100%, 0)">
         <div class="mys-multiscroll-slide__content slide-1-right">Slide 1 Right</div>
      </div>
   </div>
   <!-- Slide 1 -->

   <!-- Slide 2 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 200%, 0)">
         <div class="mys-multiscroll-slide__content slide-0-left">Slide 2 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -200%, 0)">
         <div class="mys-multiscroll-slide__content slide-0-right">Slide 2 Right</div>
      </div>
   </div>
   <!-- Slide 2 -->

   <!-- Slide 3 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 300%, 0)">
         <div class="mys-multiscroll-slide__content slide-3-left">Slide 3 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -300%, 0)">
         <div class="mys-multiscroll-slide__content slide-3-right">Slide 3 Right</div>
      </div>
   </div>
   <!-- Slide 3 -->

   <!-- Slide 4 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 400%, 0)">
         <div class="mys-multiscroll-slide__content slide-4-left">Slide 4 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -400%, 0)">
         <div class="mys-multiscroll-slide__content slide-4-right">Slide 4 Right</div>
      </div>
   </div>
   <!-- Slide 4 -->

   <!-- Slide 5 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 500%, 0)">
         <div class="mys-multiscroll-slide__content slide-5-left">Slide 5 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -500%, 0)">
         <div class="mys-multiscroll-slide__content slide-5-right">Slide 5 Right</div>
      </div>
   </div>
   <!-- Slide 5 -->

   <!-- Slide 6 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 600%, 0)">
         <div class="mys-multiscroll-slide__content slide-6-left">Slide 6 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -600%, 0)">
         <div class="mys-multiscroll-slide__content slide-6-right">Slide 6 Right</div>
      </div>
   </div>
   <!-- Slide 6 -->

   <!-- Slide 7 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 700%, 0)">
         <div class="mys-multiscroll-slide__content slide-3-left">Slide 7 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -700%, 0)">
         <div class="mys-multiscroll-slide__content slide-3-right">Slide 7 Right</div>
      </div>
   </div>
   <!-- Slide 7 -->

   <!-- Slide 8 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 800%, 0)">
         <div class="mys-multiscroll-slide__content slide-8-left">Slide 8 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -800%, 0)">
         <div class="mys-multiscroll-slide__content slide-8-right">Slide 8 Right</div>
      </div>
   </div>
   <!-- Slide 8 -->

   <!-- Slide 9 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 900%, 0)">
         <div class="mys-multiscroll-slide__content slide-9-left">Slide 9 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -900%, 0)">
         <div class="mys-multiscroll-slide__content slide-9-right">Slide 9 Right</div>
      </div>
   </div>
   <!-- Slide 9 -->

   <!-- Slide 10 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 1000%, 0)">
         <div class="mys-multiscroll-slide__content slide-10-left">Slide 10 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -1000%, 0)">
         <div class="mys-multiscroll-slide__content slide-10-right">Slide 10 Right</div>
      </div>
   </div>
   <!-- Slide 10 -->

   <!-- Slide 11 -->
   <div aria-hidden="true" data-mys-multiscroll-slide-type="multi" class="mys-multiscroll-slide">
      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, 1100%, 0)">
         <div class="mys-multiscroll-slide__content slide-11-left">Slide 11 Left</div>
      </div>

      <div class="mys-multiscroll-slide__multi" style="transform: translate3d(0, -1100%, 0)">
         <div class="mys-multiscroll-slide__content slide-11-right">Slide 11 Right</div>
      </div>
   </div>
   <!-- Slide 11 -->
</main>
`.trim();

const HTML_TEXT_CODE = `${HTML_TEXT_BUTTON_NAVIGATIONS + HTML_TEXT_SLIDES}`;

function setupHTML() {
	document.body.innerHTML = HTML_TEXT_CODE;
}

export default setupHTML;
