/** @module state */

/** The initial game state. */
export const state: any = {
  screen: {
    width: 1280,
    height: 800,
    backgroundColor: 0x000000,
  },
  buttons: [],
  instructions: [
    {
      page: 1,
      text: 'You have one shot to escape the crumbling earth and make it to the moon.',
    },
    {
      page: 2,
      text: `Moon Ark is a single player game where you are trying to find a route off of Earth with the necessary supplies and make it to the Moon on the "Ark" before the Earth crumbles underneath you.
      
The Earth is not making things easy for you by destroying potential launch sites, evaporating precious resources, and sabotaging any routes you have may have planned for escape.

The deck contains of 43 city cards that indicate places to gather materials to help you escape the planet on the Moon Ark.`,
    },
    {
      page: 3,
      text: `The #0 card, the first city on your route, is placed in the center of the play area. This is the beginning of your escape route.

You will be given City cards #1, #2, #3, and #42 (the cities you were able to get to before the Earth reached its critical stage, plus your final launch site). The remaining City cards are sorted into three decks: Local, National, Global

You will able about to draw 5 additional City cards to start:
- Local deck: Draw 3 City cards
- National deck: Draw 2 City cards
- Global deck: Draw 0 City cards`,
    },
    {
      page: 4,
      text: `Each City card has 2 numbers: a Route Stop number (#0 - #42) and a Boost number (marked by packages).

You use cards by either placing them as Route Stops or by forfeiting them to boost your speed. The Earth can destroy deck cards at any time to reduce the number of possible Route Stops you can use to escape.`,
    },
    {
      page: 5,
      text: `You can use City cards to advance along your route. You are allowed to advance to a City if it is no more than 3 higher than the number of the previous City placed. You cannot place a new City whose number is lower than the previous City.

In order to advance more than 3 numbers in a turn, you may choose to sacrifice a City's resources to gain a boost to escape the Earth faster. The number ON these cards are not displayed, just how many were sacrified. The amount of the boost is determined by the number of packages on the boost cards.

You are not required to use all of the boost obtained from the sacrificed (in case you want to use it to through looters off your trail).`,
    },
    {
      page: 6,
      text: `Example 1: Normal Advancement

The previous City is #6. You may chose to play the #7, #8, or #9 City card. You cannot play the #4 City card because it is lower than your previous City and you cannot play the #10 City card because it is more than 3 higher than your previous City.

Example 2: Boost Advancement

The previous City is #6. You may chose to play the #11 City card by sacrificing the #4 City card (which has 2 packages) boost your advancement by +2. You can also play the #10, #9, #8, or #7 City card because you are not required to use all of your boost.`,
    },
    {
      page: 7,
      text: `You may choose to pass your turn and play no City cards. This lets you build up City cards in your hand for later use, but you also risk the Earth sabotaging your future escape routes.`,
    },
    {
      page: 8,
      text: `During its turn, the Earth can destroy any City card left in any of the 3 decks. The Earth's destruction starts in your local area and spreads throughout the globe. As you advance into cards from the other decks, the Earth's destruction path will grow and start to destroy Cities in those decks as well.`,
    },
    {
      page: 9,
      text: `First Turns

- You: Place 1 or 2 new Route Stops
- Earth: Destroy 2 Cities from any deck

Subsequent Turns

- You: Draw 1 Card from any deck. Place a new Route Stop or Pass
- Earth: Destroy 1 City from any deck`,
    },
    {
      page: 10,
      text: `You win by playing City cards until you can ultimately play the #42 City card and escape on the Ark.

You lose if the Earth is able to destroy all potential paths forward and make it impossible for you to find an escape route.`,
    },
  ],
};
