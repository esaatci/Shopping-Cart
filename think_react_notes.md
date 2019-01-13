# Step 1: Break The UI Into A Component Hierarchy

Draw boxes around every component.
use single responsibility principle
a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
Components that appear within another component in the mock should appear as a child in the hierarchy

# Step 2: Build a Static version in React

The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.
decouple these processes

To build a static version of your app that renders your data model, build components that reuse other components and pass data using props.

### Props vs State
Two distinct models

# Identify the Minimal Representation of UI State

To build your app correctly, you first need to think of the minimal set of mutable state that your app needs.
Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.

Questions to Ask to Determine the States:

he search text and the checkbox seem to be state since they change over time and can’t be computed from anything.

# Step 4: Identify Where your State Should Live

Next, we need to identify which component mutates, or owns, this state.

Note: React is all about one-way data flow down the component hierarchy.


