import { fireEvent, prettyDOM } from "@testing-library/dom";

import store from "../../dekstop/multiscroll/javascript/store.js";
import Multiscroll from "../../dekstop/multiscroll/javascript/Multiscroll.js";

import setupCSS from "../utils/setupCSS.js";
import setupHTML from "../utils/setupHTML.js";
import setupStore from "../utils/setupStore.js";
import getAriaHiddenAttr from "../utils/getAriaHiddenAttr.js";
import isSlideElementHasZindex from "../utils/isSlideElementHasZindex.js";
import isNavBtnElementHasActiveClass from "../utils/isNavBtnElementHasActiveClass.js";

beforeEach(() => {
	setupCSS();
	setupHTML();
	setupStore();

	jest.useFakeTimers();
});

afterEach(() => {
	jest.useRealTimers();
});

describe("KeyboardNavigation", () => {
	describe("Home - the first slide become the active slide", () => {
		test("the first slide should become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "End",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "Home",
			});

			const firstSlideNumber = 0;
			const activeSlideNumber = store.getState().currentActiveSlideNumber;
			const firstSlideElement = document.querySelector(".mys-multiscroll-slide:first-child");

			expect(getAriaHiddenAttr(firstSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(firstSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});
	});

	describe("End - the last slide become the active slide", () => {
		test("the last slide should become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "End",
			});

			const slideElements = document.getElementsByClassName("mys-multiscroll-slide");
			const lastSlideNumber = slideElements.length - 1;
			const lastSlideElement = slideElements[lastSlideNumber];
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(lastSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(lastSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(lastSlideNumber);
		});
	});

	describe("Home and End - press End key after that press Home key", () => {
		test("the last slide is an active slide and after that the first slide is an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "End",
			});

			const slides = document.getElementsByClassName("mys-multiscroll-slide");

			const firstSlideNumber = 0;
			const firstSlideElement = slides[firstSlideNumber];

			const lastSlideNumber = slides.length - 1;
			const lastSlideElement = slides[lastSlideNumber];

			expect(getAriaHiddenAttr(lastSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(lastSlideElement)).toBe(true);
			expect(store.getState().currentActiveSlideNumber).toBe(lastSlideNumber);

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "Home",
			});

			expect(getAriaHiddenAttr(firstSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(firstSlideElement)).toBe(true);
			expect(store.getState().currentActiveSlideNumber).toBe(firstSlideNumber);
		});
	});

	describe("ArrowDown - go to the next slide", () => {
		test("the next slide become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const nextSlideNumber = 1;
			const nextSlideElement = document.querySelector(".mys-multiscroll-slide:nth-child(2)");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(nextSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(nextSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(nextSlideNumber);
		});

		test("the last slide still an active slide if we press ArrowDown when the last slide is an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "End",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const slideElements = document.getElementsByClassName("mys-multiscroll-slide");
			const lastSlideNumber = slideElements.length - 1;
			const lastSlideElement = slideElements[lastSlideNumber];
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(lastSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(lastSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(lastSlideNumber);
		});
	});

	describe("PageDown - go to the next slide", () => {
		test("the next slide become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "PageDown",
			});

			const nextSlideNumber = 1;
			const nextSlideElement = document.querySelector(".mys-multiscroll-slide:nth-child(2)");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(nextSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(nextSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(nextSlideNumber);
		});

		test("the last slide still an active slide if we press PageDown when the last slide is an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "End",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "PageDown",
			});

			const slideElements = document.getElementsByClassName("mys-multiscroll-slide");
			const lastSlideNumber = slideElements.length - 1;
			const lastSlideElement = slideElements[lastSlideNumber];
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(lastSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(lastSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(lastSlideNumber);
		});
	});

	describe("ArrowUp - go to the previous slide", () => {
		test("the first slide should become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "ArrowUp",
			});

			const firstSlideNumber = 0;
			const previousSlideElement = document.querySelector(".mys-multiscroll-slide:first-child");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(previousSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(previousSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});

		test("the first slide still an active slide if we press ArrowUp when the first slide is active", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowUp",
			});

			const firstSlideNumber = 0;
			const firstSlideElement = document.querySelector(".mys-multiscroll-slide:first-child");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(firstSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(firstSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});
	});

	describe("PageUp - go to the previous slide", () => {
		test("the first slide should become an active slidethe first slide should become an active slide", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "PageUp",
			});

			const firstSlideNumber = 0;
			const activeSlideNumber = store.getState().currentActiveSlideNumber;
			const previousSlideElement = document.querySelector(".mys-multiscroll-slide:first-child");

			expect(getAriaHiddenAttr(previousSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(previousSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});

		test("the first slide still an active slide if we press PageUp when the first slide is active", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "PageUp",
			});

			const slideElements = document.getElementsByClassName("mys-multiscroll-slide");

			const firstSlideNumber = 0;
			const firstSlideElement = slideElements[firstSlideNumber];
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(isSlideElementHasZindex(firstSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});
	});

	describe("Stop others slide navigating process if the current process is not done yet", () => {
		test("the first slide should become an active slide", () => {
			new Multiscroll();

			store.setState({
				type: "SLIDING-PROCESS",
				values: {
					isSlideNavigating: true,
				},
			});

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const firstSlideNumber = 0;
			const firstSlideElement = document.querySelector(".mys-multiscroll-slide:first-child");
			const secondSlideElement = document.querySelector(".mys-multiscroll-slide:nth-child(2)");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(getAriaHiddenAttr(firstSlideElement)).toBe(false);
			expect(getAriaHiddenAttr(secondSlideElement)).toBe(true);
			expect(isSlideElementHasZindex(secondSlideElement)).toBe(false);
			expect(isSlideElementHasZindex(firstSlideElement)).toBe(true);
			expect(activeSlideNumber).toBe(firstSlideNumber);
		});
	});

	describe("Keyboard navigation and button nav", () => {
		test("nav button is active accordingly when keyboard navigation in triggered", () => {
			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const nextSlideNumber = 1;
			const nextNavBtnElement = document.querySelector(".mys-multiscroll-nav__btn:nth-child(2)");
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(isNavBtnElementHasActiveClass(nextNavBtnElement)).toBe(true);
			expect(activeSlideNumber).toBe(nextSlideNumber);
		});

		test("nothing happen for nav buttons if the elements is not exist in the DOM while keyboard navigation is triggered", () => {
			const navBtnContainer = document.querySelector(".mys-multiscroll-nav");
			navBtnContainer.remove();

			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const navBtnElements = document.getElementsByClassName("mys-multiscroll-nav__btn");

			expect(navBtnElements.length).toBe(0);
		});
	});

	describe("Mobile view - keyboard event won't work if the current viewport is mobile view", () => {
		test("won't do anything when keyboard navigation is triggered", () => {
			const originalInnerWidth = window.innerWidth;

			window.innerWidth = 400;

			new Multiscroll();

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			jest.advanceTimersByTime(610);

			fireEvent.keyDown(document, {
				key: "ArrowDown",
			});

			const defaultSlideActiveNumber = 0;
			const activeSlideNumber = store.getState().currentActiveSlideNumber;

			expect(activeSlideNumber).toBe(defaultSlideActiveNumber);

			// Restore the original window.innerWidth
			window.innerWidth = originalInnerWidth;
		});
	});
});
