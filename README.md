# Git Hygiene and Workflows

## Branching Bulletin Board

## Objectives

- Preserve the main branch as a development branch with production-ready features.
- Create individual branches for the development of new features.
- Merge completed feature branches into main when ready.
- Solicit feedback on pull requests on GitHub.
- Resolve merge conflicts.

## Why?

Before starting this lab, please read [this post](https://cloudfour.com/thinks/squashing-your-pull-requests) on some of the options available to you when you decide to merge your work into main.

## Directions

This lab is all about Git and GitHub workflows so you'll be working in teams. This lab is optimized for 2 or 4 participants per repo, so once you're in a team of 2-4 people, designate a team captain and have them fork the repo.

Then, have the team captain add the remaining team member(s) as collaborators - they'll need editor access in order to commit to the same repo without entirely different forks.

## Framing

You've been handed a half-built bulletin board from a team at another company that couldn't quite get it working before they had to reassign the engineer working on it.

Your job is to refactor out some bugs and inefficiencies, and then add in some new features. The kicker is that this is your team's first project together, and so you'll want to communicate as actively as possible about who is doing what, and how you incorporate those changes.

## Exercises

### 1. Fix the Blocks & Generate Better Sample Data

The first thing you and your team notice is that the bulletin blocks themselves need work. There are three different block components, but it's pretty obvious in examining the code that the same effect could be accomplished with a LOT less repetition and a lot more clarity if Large, Medium, and Small were options for a single component.

It's also clear that without some better data, it's going to be hard to come up with the rules for a color scheme that works consistently no matter how the individual blocks are displayed.

Start by creating a new branch called `block-refactor` for this major overhaul.Then, look at the proposed division of responsibilities below. Talk with your team about what you're planning to do, what the prop names will be, whether any types need to be created, and then create each of the following branches to build out the corresponding features.

| Team   | A                                                                                                                | B                                                                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Branch | `single-block` branched from `block-refactor`                                                                    | `sample-data` branched from `block-refactor`                                                                                                                           |
| Task   | Refactor the `LargeBlock` so that it can take in `size` as a property, and then size it according to that value. | Create a json or similar input structure where you can store an array of objects to represent announcements, and then map over the array and render out `LargeBlock`s. |

When Team B is done, initiate a pull request to merge `sample-data` into `block-refactor`, and Team A should be the ones to review that pull request.

Team A should likewise create a pull request from `single-block` into `block-refactor`, and Team B should be the ones to review that PR.

**NOTE**: Please bear in mind that while just tagging someone in a PR is one way to request their attention on a pull request, that by itself doesn't communicate much of what you need. Do you think the code is production ready, or are you asking for some advice? Is this a hotfix that you need reviewed by the end of the day (and if so, lots of "pleases" and "thank yous" are in order), or does it have a more reasonable deadline? If you tagged multiple people, are you asking all of them to review, or just the first one who gets a chance?

All of these things _can_ be addressed within the comments of the platform, but GitHub may not be the first place your co-workers look when they sit down to decide how to spend their time. With that in mind, you are _highly_ encouraged to reach out on Slack, Teams, or email, or whatever other method you usually use to interact with your colleagues and give them as much context as you can about the code you're asking them to review. You still can (and should) use GitHub's in-platform tools to keep track of who you've invited to review specific pieces of code, but don't rely on them as the primary means of communicating your expectations to your team.

The first of these two PRs is likely to merge in without a hitch. It's possible that you will have zero conflicts that need resolving in the second PR, but not likely. Take some time to resolve them before moving on to part 2.

### 2. Block chunks and additional refactoring.

| Team   | A                                                                                               | B                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Branch | remain on `single-block`                                                                        | new branch `block-chunks` from `block-refactor`                                                   |
| Task   | Find a way to ensure that each block doesn't touch a color of any of its neighbors in the grid. | Refactor the `BlockGrid` out as its own component, and have it take in the sample data as a prop. |

Both teams should create pull requests to merge their branches into `block-refactor`, tag the other team for review, merge those branches in, and resolve any resulting conflicts.

At this point, `block-refactor` should be ready to merge back in to `main`.

### 3. Separate, Sort, and Fill the Grid

| Team   | A                                                                                                                                                                                            | B                                                                                                                                                                                                                                                  |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Branch | new branch `grid-fill` from `main`                                                                                                                                                           | new branch `sorted-blocks` from `main`                                                                                                                                                                                                             |
| Task   | Find a way to ensure that the grid fills. You could use any number of tricks to make this happen, including some conditional sizing, some clever sorting, or some resourceful CSS Grid work. | Now that you've got different BlockGrids available to you, it's time to sort these announcements by category. For now, let's just add a "work" and "personal" tag to each announcement, and put them in two corresponding block grids with titles. |

These two features are both mostly independent of one another, so each can be merged directly onto `main` when it is done. Follow the same procedures as above.

### 4. Choose Your Own Adventure

From this point on, it's totally up to you - talk with your teams about what's reasonable to accomplish in the time that remains, and create the corresponding feature branches to make it happen.
