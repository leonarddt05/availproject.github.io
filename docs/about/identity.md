---
id: identity
title: How to Set an On-Chain Identity
sidebar_label: Set Your Identity
description: 'Learn how to set an on-chain identity on the Goldberg testnet.'
keywords:
  - docs
  - avail
  - explorer
  - identity
image: https://docs.availproject.org/img/avail/AvailDocs.png
---

## Introduction

This guide will walk you through the process of setting an on-chain identity on the Goldberg testnet.

## Reserve Funds for Identity Bonding

To store personal information on-chain, users are required to lock a specific amount of funds as a bond. This bond is refundable upon the clearance of the identity.

Retrieve the necessary bond amounts by querying the [<ins>Chain state constants</ins>](https://goldberg.avail.tools/#/chainstate) on the [<ins>Goldberg Explorer</ins>](/docs/about/explorer.md).

### Accessing Chain State Constants

Determine the bond amounts via the chain's interface by doing the following:

1. Navigate to the "Developer" menu on the navbar and select "Chain state."
2. Under the "Constants" tab, choose `identity` from the "selected constant query" menu. The `basicDeposit: u128` parameter will be the default.
3. To add constants to the view, click the "plus" ("+") icon.

Each information field is limited to 32 bytes. Use a [<ins>UTF8 to bytes converter</ins>](https://onlinetools.com/utf8/convert-utf8-to-bytes) when manually entering data through the [<ins>Extrinsics UI</ins>](https://goldberg.avail.tools/#/extrinsics).

## Set Your On-Chain Identity

Add personal details such as your legal name, display name, and website through the user interface:

1. Click the three vertical dots next to your account and select "Set on-chain identity."
2. In the popup, toggle and fill in the desired fields.
3. Confirm by clicking "Set Identity" and submit the transaction to finalize your on-chain identity.
4. Confirm your details and click "Set Identity" to proceed.
5. Sign the transaction and submit it to complete the identity setting process.
