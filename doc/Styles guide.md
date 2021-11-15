# Styles' guide RangeConverter Project

## Paddings for the Players

For those on the left it is:

```css
.order-NUMBER {
	padding-left: var(--padding-money);
	padding-right: 0.3rem;
}
```

And for the right the reverse of the previous

```css
.order-NUMBER {
	padding-right: var(--padding-money);
	padding-left: 0.3rem;
}
```

## State of the Hero Evaluation

We can find four differences states for the Hero Evaluation, de default is the green, but is we want another states we have to add the diferences class on the:

```html
<div class="Player--evaluation-container"></div>
```

The name of the class for the diferences states are: "evaluation\_\_small-error", "evaluation\_\_large-error","evaluation\_\_blunder"

For example, if you wanna say to the user what has a small error you have to do the next:

```html
<div class="Player--evaluation-container evaluation__small-error"></div>
```

## Paddings for the Player--money

They have a class what will define how many separation will have, the name of the class is "--padding-money" and that class must be define on the class "Player--container"

If the money is in the right direction it must have the following padding:

```css
.order-NUMBER .Player--money {
	padding-left: var(--padding-money);
	padding-right: 0.3rem;
	left: 80%;
	right: initial;
}
```

And if it is on the left in reverse:

```css
.order-NUMBER .Player--money {
	padding-right: var(--padding-money);
	padding-left: 0.3rem;
	right: 80%;
	left: initial;
}
```

## Positions Cards

If the cards are on the right part must:

```css
.order-NUMBER .Player--cards {
	right: 0;
	left: initial;
}
```

And to the left part:

```css
.order-NUMBER .Player--cards {
	right: initial;
	left: 0;
}
```

### Direction of cards

If the cards are on the left part of the table the config must be

```css
.order-NUMBER .Player--cards {
	right: 0;
	left: initial;
}
.order-NUMBER .Player--cards > img:nth-child(2) {
	top: 10%;
	left: 50%;
}

.order-NUMBER .Player--cards > img:nth-child(3) {
	top: 20%;
	left: 100%;
}

.order-NUMBER .Player--cards > img:nth-child(4) {
	top: 30%;
	left: 150%;
}

.order-NUMBER .Player--cards > img:nth-child(5) {
	top: 40%;
	left: 200%;
}
```

And if the cards are in the right part of the table we used the next code:

```css
.order-NUMBER .Player--cards {
	right: initial;
	left: 0;
}

.order-NUMBER .Player--cards > img:nth-child(2) {
	right: 50%;
	left: initial;
}

.order-NUMBER .Player--cards > img:nth-child(3) {
	right: 100%;
	left: initial;
}

.order-NUMBER .Player--cards > img:nth-child(4) {
	right: 150%;
	left: initial;
}

.order-NUMBER .Player--cards > img:nth-child(5) {
	right: 200%;
	left: initial;
}
```

## Separación Player--lock

The player lock has a variable called --lock-separation that indicates the separation that it will have both to the left and to the right in the different Default style measures:

The variable --lock-separation has different definitions, which are 3 depending on the resolution and the mode, example:

The initial or that is kept in mobile is:

```css
.Player--lock {
	--lock-separation: 15%;
}
```

But we see another one that is for when the device is in landscape

```css
@media screen and (orientation: landscape) {
	.Player--lock {
		--lock-separation: 5%;
	}
}
```

And finally we see the iPad mode when it is in portrait:

```css
@media (min-width: 1024px) and (orientation: portrait) {
	.Player--lock {
		--lock-separation: 5%;
	}
}
```

Lock in left part:

```css
.order-NUMBER .Player--lock {
	left: var(--lock-separation);
	right: initial;
}
```

Lock in right part:

```css
.order-NUMBER .Player--lock {
	right: var(--lock-separation);
	left: initial;
}
```
