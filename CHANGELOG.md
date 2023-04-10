# Changelog

## [5.0.0](https://github.com/Wykerd/YouTube.js/compare/v4.2.0...v5.0.0) (2023-04-10)


### ⚠ BREAKING CHANGES

* **Parser:** general refactoring of parsers ([#344](https://github.com/Wykerd/YouTube.js/issues/344))
* The `toDash` functions are now asynchronous, they now return a `Promise<string>` instead of a `string`, as we need to fetch the first sequence of the OTF format streams while building the manifest.
* cleanup platform support ([#306](https://github.com/Wykerd/YouTube.js/issues/306))
* fix inconsistent use of `SuperParsedResult`
* migrate core renderers to TypeScript
* rewrite `MusicNavigationButton` to TypeScript
* **ytmusic:** rewrite `Album` to TypeScript
* rewrite `History` to TypeScript
* rewrite `Analytics` to TypeScript ([#122](https://github.com/Wykerd/YouTube.js/issues/122))
* better cross runtime support ([#97](https://github.com/Wykerd/YouTube.js/issues/97))
* rewrite `PlaylistManager`
* finish parser migration
* feature complete contents parser

### Features

* accurately emulate like/dislike button clicks ([3f22a44](https://github.com/Wykerd/YouTube.js/commit/3f22a44ba9dd96575f609b0349bab5f50490c9fe))
* add `&lt;info&gt;#addToWatchHistory()` ([#169](https://github.com/Wykerd/YouTube.js/issues/169)) ([28a651e](https://github.com/Wykerd/YouTube.js/commit/28a651ea3a889adcea8c34678a8ebac1318d225c))
* add `ANDROID_MUSIC` client ([ecac5f4](https://github.com/Wykerd/YouTube.js/commit/ecac5f4d7e5790baf4a6858f2255f1f84fc42851))
* add `CollaboratorInfoCardContent` renderer parser ([#180](https://github.com/Wykerd/YouTube.js/issues/180)) ([eb44b71](https://github.com/Wykerd/YouTube.js/commit/eb44b719396f30f8cdbd50af15829b2a76029d0f))
* add `LiveChatProductItem` and migrate `LiveChatBanner` to TypeScript ([323b90a](https://github.com/Wykerd/YouTube.js/commit/323b90a98c610af0c8e19e99bb35e17955a4379c))
* add `LiveChatRestrictedParticipation` node ([#267](https://github.com/Wykerd/YouTube.js/issues/267)) ([1163125](https://github.com/Wykerd/YouTube.js/commit/1163125f5ca066e2c1ec48d2ee4a6d648654e6a9))
* add `music#getRecap()` ([#165](https://github.com/Wykerd/YouTube.js/issues/165)) ([85fc468](https://github.com/Wykerd/YouTube.js/commit/85fc468cc9639dcc9ea6aa297a0e4ed8483a664b))
* add `MusicSortFilterButton` ([#151](https://github.com/Wykerd/YouTube.js/issues/151)) ([6fe4d23](https://github.com/Wykerd/YouTube.js/commit/6fe4d235ff739d1d22282cb44a78ce39e8ad34fa))
* add `MusicVisualHeader` ([#157](https://github.com/Wykerd/YouTube.js/issues/157)) ([b9e6e16](https://github.com/Wykerd/YouTube.js/commit/b9e6e16ce91a2aab173c0ed6c85a0a0ef1477a55))
* add `PlaylistPanelVideoWrapper` parser ([#176](https://github.com/Wykerd/YouTube.js/issues/176)) ([bc03c91](https://github.com/Wykerd/YouTube.js/commit/bc03c91df9d9f42d5b04bcfd2a803c489a255d0a))
* add `SimpleCardContent` ([3ff3d3c](https://github.com/Wykerd/YouTube.js/commit/3ff3d3c633bbe50abd65d10a6eebb105aa26f59f)), closes [#129](https://github.com/Wykerd/YouTube.js/issues/129)
* add `Studio#setThumbnail()` method ([#111](https://github.com/Wykerd/YouTube.js/issues/111)) ([a210396](https://github.com/Wykerd/YouTube.js/commit/a2103963b4b46d7fbefa73ceccd16a01416bcd5d))
* add `TVHTML5_SIMPLY_EMBEDDED_PLAYER` client ([#193](https://github.com/Wykerd/YouTube.js/issues/193)) ([2e5688f](https://github.com/Wykerd/YouTube.js/commit/2e5688f23553dbbcaaa0f29366a93ab805d9a84b))
* add account info parsers ([f4ce4d2](https://github.com/Wykerd/YouTube.js/commit/f4ce4d2f746f44dc9ad6381d89ba0e179a8ec98b))
* add all watch history feed action renderers ([455556b](https://github.com/Wykerd/YouTube.js/commit/455556ba89f39281d00b5c2534087b29a27e6241))
* add full support for refinement cards ([b6a898f](https://github.com/Wykerd/YouTube.js/commit/b6a898f7333e460f321fbe06bad6a5fe0232f6a7))
* add is_live and is_upcoming to VideoDetails ([#271](https://github.com/Wykerd/YouTube.js/issues/271)) ([22b9c17](https://github.com/Wykerd/YouTube.js/commit/22b9c174bb14f2f05edced1884e83e52b6983cba))
* add live stream start_timestamp ([#275](https://github.com/Wykerd/YouTube.js/issues/275)) ([cd4d28c](https://github.com/Wykerd/YouTube.js/commit/cd4d28c9519c0f08fb118ed6278f8c4ab637769b))
* add LiveChatAutoModMessage ([#177](https://github.com/Wykerd/YouTube.js/issues/177)) ([e00be25](https://github.com/Wykerd/YouTube.js/commit/e00be25bf49cf6cf20239fad4c23e97e200dd291))
* Add paid chat color info ([#164](https://github.com/Wykerd/YouTube.js/issues/164)) ([a8322e3](https://github.com/Wykerd/YouTube.js/commit/a8322e35f554e2b9a7f18415f837a6a432e8e2d4))
* add parser support for MultiImage community posts ([#298](https://github.com/Wykerd/YouTube.js/issues/298)) ([de61782](https://github.com/Wykerd/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add parsers for `TimeWatched` ([541cdc4](https://github.com/Wykerd/YouTube.js/commit/541cdc455f07b06ff5b7e3eb1a6b09c9a2cbfaa1))
* add RemoveChatItemAction and LiveChatTickerStickerItem ([#214](https://github.com/Wykerd/YouTube.js/issues/214)) ([a9eba7c](https://github.com/Wykerd/YouTube.js/commit/a9eba7ca62ff8bbfc9d1030395088dedd89ea769))
* add settings page parser ([#154](https://github.com/Wykerd/YouTube.js/issues/154)) ([13a86cb](https://github.com/Wykerd/YouTube.js/commit/13a86cb4e796db573ec7eefc93f1cda1d49e5d53))
* add support for chapters & video heatmap ([#263](https://github.com/Wykerd/YouTube.js/issues/263)) ([6a4b4f3](https://github.com/Wykerd/YouTube.js/commit/6a4b4f335924b96550403ad0d0b12eabeb29d760))
* Add support for descriptive audio tracks ([#338](https://github.com/Wykerd/YouTube.js/issues/338)) ([574b67a](https://github.com/Wykerd/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* add support for generating sessions locally ([#277](https://github.com/Wykerd/YouTube.js/issues/277)) ([00fa514](https://github.com/Wykerd/YouTube.js/commit/00fa514b030b311a9e493391cbb938b2a04667ed))
* add support for hashtag feeds ([#312](https://github.com/Wykerd/YouTube.js/issues/312)) ([bf12740](https://github.com/Wykerd/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* Add support for OTF format streams ([3e4d41b](https://github.com/Wykerd/YouTube.js/commit/3e4d41bf06ba16232979977c705444f2032bcde6))
* add support for retrieving YouTube Music's home feed ([5f08be7](https://github.com/Wykerd/YouTube.js/commit/5f08be7991a4f7e5867934d9535074668022809d))
* add support for searching within a channel ([#262](https://github.com/Wykerd/YouTube.js/issues/262)) ([2b3642b](https://github.com/Wykerd/YouTube.js/commit/2b3642ba63bbcd0c6330860245722cbf2f91191e))
* add support for switching accounts (cookie based auth only) ([#236](https://github.com/Wykerd/YouTube.js/issues/236)) ([5ea0a0e](https://github.com/Wykerd/YouTube.js/commit/5ea0a0ebf8fe5e0731d8bbdd08cdc50bad069a6b))
* add support for topic/auto-generated channels and fix minor parsing errors ([#233](https://github.com/Wykerd/YouTube.js/issues/233)) ([3cbcd71](https://github.com/Wykerd/YouTube.js/commit/3cbcd71a3a2a868377b46b9240758642bec2a051))
* add support for uploading videos ([#115](https://github.com/Wykerd/YouTube.js/issues/115)) ([95079ce](https://github.com/Wykerd/YouTube.js/commit/95079ced09531dd8877cd3692f7c705f5b4a375c))
* add support for YouTube Kids ([#291](https://github.com/Wykerd/YouTube.js/issues/291)) ([2bbefef](https://github.com/Wykerd/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* add suppory for YouTube Music's “Explore” tab ([98e7afd](https://github.com/Wykerd/YouTube.js/commit/98e7afda875f5e88b94797a9af1196c16e1cf75c))
* add ThumbnailOverlayEndorsement, [#75](https://github.com/Wykerd/YouTube.js/issues/75) ([3458bb4](https://github.com/Wykerd/YouTube.js/commit/3458bb422a0d42ebd98cea5ab76ddd5cd23c20c2))
* add ThumbnailOverlayInlineUnplayable renderer ([f6af3fa](https://github.com/Wykerd/YouTube.js/commit/f6af3faa41e6497aeb39ce1f472097643c2cb534))
* Add upcoming and live info to playlist videos ([#317](https://github.com/Wykerd/YouTube.js/issues/317)) ([a0bfe16](https://github.com/Wykerd/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* add YouTube livechat renderers ([7ec6d6d](https://github.com/Wykerd/YouTube.js/commit/7ec6d6dd211d07994d9409931d57634cb02ced14))
* allow checking whether a channel has optional tabs ([#296](https://github.com/Wykerd/YouTube.js/issues/296)) ([ceefbed](https://github.com/Wykerd/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* allow enabling safety mode ([#269](https://github.com/Wykerd/YouTube.js/issues/269)) ([a27807b](https://github.com/Wykerd/YouTube.js/commit/a27807b6c1b1e39bc54b0259c266ab3a8d81d944))
* allow users to cache OAuth credentials ([#121](https://github.com/Wykerd/YouTube.js/issues/121)) ([9ef765d](https://github.com/Wykerd/YouTube.js/commit/9ef765dbc1a466b839b273d6fc1b77278f95c1a1))
* better cross runtime support ([#97](https://github.com/Wykerd/YouTube.js/issues/97)) ([fb68e6b](https://github.com/Wykerd/YouTube.js/commit/fb68e6bcfedecc67e9131b71292a2dd3a21b7f14))
* bring back `Video#is_live` and add `ExpandableMetadata` ([#256](https://github.com/Wykerd/YouTube.js/issues/256)) ([e37f42f](https://github.com/Wykerd/YouTube.js/commit/e37f42f41b9dc884e0ef6cb57d974875c2915382))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/Wykerd/YouTube.js/issues/303)) ([b2900f4](https://github.com/Wykerd/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for filters ([#237](https://github.com/Wykerd/YouTube.js/issues/237)) ([0e5e0c0](https://github.com/Wykerd/YouTube.js/commit/0e5e0c0fabc75882ad9d4fba1c1a5682581e285f))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/Wykerd/YouTube.js/issues/295)) ([50ef712](https://github.com/Wykerd/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* **Channel:** parse subscribe button ([b036e2f](https://github.com/Wykerd/YouTube.js/commit/b036e2fcdc0d7fdad4802aa6b9072fbeb50350bb))
* custom parser error handler ([#222](https://github.com/Wykerd/YouTube.js/issues/222)) ([8740deb](https://github.com/Wykerd/YouTube.js/commit/8740deb1f264fd7eb084001317c0a1207e48b78c))
* download video directly from VideoInfo ([6d7609c](https://github.com/Wykerd/YouTube.js/commit/6d7609c32adc14954b06f261437805a27904dbaf))
* **download:** bring back `WEB` client ([#156](https://github.com/Wykerd/YouTube.js/issues/156)) ([317bca2](https://github.com/Wykerd/YouTube.js/commit/317bca261c2974a6fb5996212c8685ef62d25ce7))
* **EmojiRun:** Add is_custom to identify custom emojis ([#283](https://github.com/Wykerd/YouTube.js/issues/283)) ([5a362a0](https://github.com/Wykerd/YouTube.js/commit/5a362a0bd5b6974dc029bdbcdbcb81c8c65a1573))
* Enable importHelpers in tsconfig to reduce output size ([#378](https://github.com/Wykerd/YouTube.js/issues/378)) ([0b301de](https://github.com/Wykerd/YouTube.js/commit/0b301de6a1e1352a64881c1751a84360922a77cd))
* export `FormatUtils`' types ([2d774e2](https://github.com/Wykerd/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* expose parser and YTNodes as public APIs ([3dc357b](https://github.com/Wykerd/YouTube.js/commit/3dc357bee075e92904ea097ef80a51ff9aa172d7))
* extract channel error alert ([0b99180](https://github.com/Wykerd/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* finalize comment section nodes  ([#280](https://github.com/Wykerd/YouTube.js/issues/280)) ([dca61c3](https://github.com/Wykerd/YouTube.js/commit/dca61c3a22896b49e1f3bde000b997557a61c720))
* fix `music#library.getArtists()` and add `MusicShelf.bottom_button` ([#152](https://github.com/Wykerd/YouTube.js/issues/152)) ([05b4593](https://github.com/Wykerd/YouTube.js/commit/05b4593e0a8f13cfd8fc56470eecbc429aa15da8))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/Wykerd/YouTube.js/issues/308)) ([a69e43b](https://github.com/Wykerd/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* implement `Innertube#resolveURL(url)` ([#268](https://github.com/Wykerd/YouTube.js/issues/268)) ([5cfb969](https://github.com/Wykerd/YouTube.js/commit/5cfb969e33e810e3c117bc1a78206672cad0e453))
* implement SecondarySearchContainer renderer ([62811bd](https://github.com/Wykerd/YouTube.js/commit/62811bd8f106171a1b9203a7b93143ef85ba5008))
* improve LiveChat types ([daaba37](https://github.com/Wykerd/YouTube.js/commit/daaba3745e07a8f6b4cda91b3459675b355e1bac))
* improve parsing ([#145](https://github.com/Wykerd/YouTube.js/issues/145)) ([dc2f005](https://github.com/Wykerd/YouTube.js/commit/dc2f0055cc49a9a40c7546250b0a579b7c808f27))
* improve support for dubbed content ([#293](https://github.com/Wykerd/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/Wykerd/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* **LiveChat:** add `SegmentedLikeDislikeButton` and `LiveChatDialog` ([#181](https://github.com/Wykerd/YouTube.js/issues/181)) ([91847ae](https://github.com/Wykerd/YouTube.js/commit/91847ae3cc8665f7eb2d0998562c54e0fbadd99e))
* **livechat:** add LiveChatPaidSticker action ([263b488](https://github.com/Wykerd/YouTube.js/commit/263b4887c3d6eba615dc315d54cb057abf9ce344))
* **LiveChat:** add support for moderation & more ([#202](https://github.com/Wykerd/YouTube.js/issues/202)) ([2f56c15](https://github.com/Wykerd/YouTube.js/commit/2f56c15ecc151ec8d0d764b7c3a4dcb10ec8f6e1))
* make `Player` instance optional ([#240](https://github.com/Wykerd/YouTube.js/issues/240)) ([fe4c543](https://github.com/Wykerd/YouTube.js/commit/fe4c5433cf6f8de7b9b54c1c153da7f82d9ceede))
* migrate all playlist renderers to TypeScript ([a788c9c](https://github.com/Wykerd/YouTube.js/commit/a788c9c80fa944e5708ec4c6ef8802016a2c20c6))
* **Music:** add automix support and other minor improvements  ([#184](https://github.com/Wykerd/YouTube.js/issues/184)) ([f2f48af](https://github.com/Wykerd/YouTube.js/commit/f2f48af1bca59354615c4830016bf3dd57145dfc))
* parse isLive in CompactVideo ([#294](https://github.com/Wykerd/YouTube.js/issues/294)) ([2acb7da](https://github.com/Wykerd/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/Wykerd/YouTube.js/issues/337)) ([95033e7](https://github.com/Wykerd/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/Wykerd/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** add `ConversationBar` node ([b2253df](https://github.com/Wykerd/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **parser:** add `GridMix` ([#356](https://github.com/Wykerd/YouTube.js/issues/356)) ([a8e7e64](https://github.com/Wykerd/YouTube.js/commit/a8e7e644ec6df3b3c98a313f0321da27b4ca456e))
* **parser:** add `GridShow` and `ShowCustomThumbnail` ([8ef4b42](https://github.com/Wykerd/YouTube.js/commit/8ef4b42d444c4fbe5cd65a55c0e0e7aa31738755)), closes [#459](https://github.com/Wykerd/YouTube.js/issues/459)
* **parser:** add `MusicCardShelf` ([#358](https://github.com/Wykerd/YouTube.js/issues/358)) ([9b005d6](https://github.com/Wykerd/YouTube.js/commit/9b005d62d6590a2ddf6848dabfa33fce36e8df9c))
* **parser:** Add `play_all_button` to `Shelf` ([#345](https://github.com/Wykerd/YouTube.js/issues/345)) ([427db5b](https://github.com/Wykerd/YouTube.js/commit/427db5bbc2bf3e8ec60371d504c2ab1cdae6e918))
* **parser:** add `view_playlist` to `Playlist` ([#348](https://github.com/Wykerd/YouTube.js/issues/348)) ([9cb4530](https://github.com/Wykerd/YouTube.js/commit/9cb45302997771d909487b1ecba6f38655abef48))
* **parser:** add InfoPanelContent and InfoPanelContainer nodes ([4784dfa](https://github.com/Wykerd/YouTube.js/commit/4784dfa563a4dbeaee31811824d5aa37a67f5557)), closes [#326](https://github.com/Wykerd/YouTube.js/issues/326)
* **parser:** allow parser to find renderers by name ([f924a39](https://github.com/Wykerd/YouTube.js/commit/f924a394091feda6f38168eb84ccb38ab1c701ce))
* **parser:** ignore PrimetimePromo node ([ce9d9c5](https://github.com/Wykerd/YouTube.js/commit/ce9d9c56b4f45c0139d74edc95c295ecfd1ee4b1))
* **Parser:** just-in-time YTNode generation ([#310](https://github.com/Wykerd/YouTube.js/issues/310)) ([2cee590](https://github.com/Wykerd/YouTube.js/commit/2cee59024c730c34aa06052849ed6fb3f862ef33))
* **parser:** SharedPost ([#332](https://github.com/Wykerd/YouTube.js/issues/332)) ([ce53ac1](https://github.com/Wykerd/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **parser:** Text#toHTML ([#300](https://github.com/Wykerd/YouTube.js/issues/300)) ([e82e23d](https://github.com/Wykerd/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **player:** improved decipher logic ([#79](https://github.com/Wykerd/YouTube.js/issues/79)) ([1681a9b](https://github.com/Wykerd/YouTube.js/commit/1681a9b84cdf059ef176b4faadab05866bad0754))
* **PlaylistVideo:** Extract video_info and accessibility_label texts ([#376](https://github.com/Wykerd/YouTube.js/issues/376)) ([c9135e6](https://github.com/Wykerd/YouTube.js/commit/c9135e66d3c9c72b8d063eedcf3cc2123800946d))
* properly type renderer parsers ([4181969](https://github.com/Wykerd/YouTube.js/commit/4181969d52a14ff01581288d15a0f17e027f3d62))
* **Search:** add support for `features` filter ([#270](https://github.com/Wykerd/YouTube.js/issues/270)) ([3756e63](https://github.com/Wykerd/YouTube.js/commit/3756e63996735f6b3d8293cbff1e3166a9fc575d))
* **Session:** allow overriding geolocation ([#260](https://github.com/Wykerd/YouTube.js/issues/260)) ([cac7625](https://github.com/Wykerd/YouTube.js/commit/cac762569a842bd8e8d25fad072ad3544c407c17))
* **Session:** allow setting a custom visitor data token ([#371](https://github.com/Wykerd/YouTube.js/issues/371)) ([13ebf0a](https://github.com/Wykerd/YouTube.js/commit/13ebf0a03973e7ba7b65e9f72c4333927e4254f6))
* **ShowingResultsFor:** parse all props ([1d9587e](https://github.com/Wykerd/YouTube.js/commit/1d9587e8c1ee0b11bb0e444c3d1e98162e9e1059))
* smaller user-agent list ([#112](https://github.com/Wykerd/YouTube.js/issues/112)) ([#113](https://github.com/Wykerd/YouTube.js/issues/113)) ([ef6ec59](https://github.com/Wykerd/YouTube.js/commit/ef6ec5940264fbd0449fb5af07462d67c349d0d1))
* **studio:** add support for updating video metadata ([#219](https://github.com/Wykerd/YouTube.js/issues/219)) ([477c030](https://github.com/Wykerd/YouTube.js/commit/477c0300842515b9ad76448de81e64b979ffd4cf))
* **TextRun:** add support for formatting ([#254](https://github.com/Wykerd/YouTube.js/issues/254)) ([883a023](https://github.com/Wykerd/YouTube.js/commit/883a023624cab85408b700eef186e236d28153d9))
* tidy things up and implement more renderers ([748e347](https://github.com/Wykerd/YouTube.js/commit/748e34758faf99e8b94f65a896a43e8945223ee2))
* update InnerTubePayload protobuf ([6da69b4](https://github.com/Wykerd/YouTube.js/commit/6da69b4f18509b1e28f43854adf328fbb3335621))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/Wykerd/YouTube.js/issues/333)) ([214aa14](https://github.com/Wykerd/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/Wykerd/YouTube.js/issues/342)) ([0d35fe0](https://github.com/Wykerd/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/Wykerd/YouTube.js/issues/325)) ([f933cb4](https://github.com/Wykerd/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))
* wrap `Library` sections around Proxy trap ([919a35d](https://github.com/Wykerd/YouTube.js/commit/919a35d0243e7ad560ee8b21049557b7901e63a7))
* wrap format arrays around proxy trap ([7e6f944](https://github.com/Wykerd/YouTube.js/commit/7e6f944a4b6e79c115aacf4340de0f713b4eceeb))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/Wykerd/YouTube.js/issues/340)) ([a511608](https://github.com/Wykerd/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/Wykerd/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/Wykerd/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))
* **yt:** add support for movie items and trailers ([#349](https://github.com/Wykerd/YouTube.js/issues/349)) ([9f1c31d](https://github.com/Wykerd/YouTube.js/commit/9f1c31d7a09532e80a187b14acceff31c22579bf))
* **ytkids:** add `getChannel()` ([#292](https://github.com/Wykerd/YouTube.js/issues/292)) ([0fc29f0](https://github.com/Wykerd/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))
* **ytmusic:** `music#Playlist` fixes and additions ([#138](https://github.com/Wykerd/YouTube.js/issues/138)) ([dba34dc](https://github.com/Wykerd/YouTube.js/commit/dba34dc5aef9208abdc61df627732ceef0374392))
* **ytmusic:** add `music#getInfo()` ([d5f3498](https://github.com/Wykerd/YouTube.js/commit/d5f34982f40ac88947889e68dacc8de5d3062ecc))
* **ytmusic:** add `music#getPlaylist()` ([#131](https://github.com/Wykerd/YouTube.js/issues/131)) ([9b4d86b](https://github.com/Wykerd/YouTube.js/commit/9b4d86b81f137ec89b8adecf49d265f3de5c8392))
* **ytmusic:** add support for artists ([7fc9b52](https://github.com/Wykerd/YouTube.js/commit/7fc9b526b00abdbe40e4915696677111180e4ea4))
* **ytmusic:** add support for retrieving albums ([97d4cc1](https://github.com/Wykerd/YouTube.js/commit/97d4cc1056ff7305d26ac768b280a0ac67b95646))
* **ytmusic:** add support for retrieving up next ([7142a63](https://github.com/Wykerd/YouTube.js/commit/7142a63b1d2c915e9156e841c22a348d6b923708))
* **ytmusic:** add support for stations in search results, [#78](https://github.com/Wykerd/YouTube.js/issues/78) ([2055697](https://github.com/Wykerd/YouTube.js/commit/20556970a70ef28fbb473aec6452818fc4c1bc07))
* **ytmusic:** expose additional segments in albums ([96857cc](https://github.com/Wykerd/YouTube.js/commit/96857ccadfff6f088651a89efcdf4dcb80070aee))
* **ytmusic:** expose Message renderer in the `Search` object ([c12b148](https://github.com/Wykerd/YouTube.js/commit/c12b1482fea801c139d01f008948244c9a303338))
* **ytmusic:** implement music#Library ([#136](https://github.com/Wykerd/YouTube.js/issues/136)) ([f6a2a41](https://github.com/Wykerd/YouTube.js/commit/f6a2a418be1bb232ee86e5612865e215677abdcb))
* **ytmusic:** multiple video authors ([#83](https://github.com/Wykerd/YouTube.js/issues/83)) ([ef9a22e](https://github.com/Wykerd/YouTube.js/commit/ef9a22e85af30edae211097f8d53ed4ec3f44112))


### Bug Fixes

* `DidYouMean` endpoints and add `text` prop ([#158](https://github.com/Wykerd/YouTube.js/issues/158)) ([c993649](https://github.com/Wykerd/YouTube.js/commit/c99364942c928d89643e2814441a3bd8ba4c9ed3))
* `LiveChatAuthorBadge` where `MetadataBadge` was expected ([#179](https://github.com/Wykerd/YouTube.js/issues/179)) ([9e618cc](https://github.com/Wykerd/YouTube.js/commit/9e618cc576182dce77ef336846eabfcec197bb3d))
* `Music#Artist`parse err if missing shelves ([#155](https://github.com/Wykerd/YouTube.js/issues/155)) ([173aec6](https://github.com/Wykerd/YouTube.js/commit/173aec65f5189e9e142d63507f0de763c8bc29dc))
* `Music#getAlbum()`fails for private album ID ([#162](https://github.com/Wykerd/YouTube.js/issues/162)) ([e498815](https://github.com/Wykerd/YouTube.js/commit/e4988157955cae6967d7c5c304b2c7d694fc5b21))
* `Music#getArtist()` and `DropdownItem` ([#170](https://github.com/Wykerd/YouTube.js/issues/170)) ([60730a5](https://github.com/Wykerd/YouTube.js/commit/60730a5531c70ca41a75186cc1927216c3760856))
* **Actions:** do not send `undefined` payloads ([0130229](https://github.com/Wykerd/YouTube.js/commit/01302292360f798b0c16783e039d38563168467a))
* add missing import in index.ts ([#188](https://github.com/Wykerd/YouTube.js/issues/188)) ([a90f5eb](https://github.com/Wykerd/YouTube.js/commit/a90f5eb8539dc0af326cffa0bff8d9e29b062162))
* add missing playlist_length ([#110](https://github.com/Wykerd/YouTube.js/issues/110)) ([9c44cfc](https://github.com/Wykerd/YouTube.js/commit/9c44cfc7f89a1c14b6a9dd2c266f395e1aeed60b))
* add PlaylistHeader renderer ([f5c6dbc](https://github.com/Wykerd/YouTube.js/commit/f5c6dbc63eaa37686fea9813f3e847e75945bb25))
* add YouTube Studio to the list of clients ([#261](https://github.com/Wykerd/YouTube.js/issues/261)) ([fb2e237](https://github.com/Wykerd/YouTube.js/commit/fb2e237284e6e483ade48a15c3b802eac92aa2ae))
* **analytics:** rename old Thumbnail module path ([eaa1624](https://github.com/Wykerd/YouTube.js/commit/eaa16244d293dd16b470a2430bd16d6d098afbd0))
* assign MetadataBadge's label ([#311](https://github.com/Wykerd/YouTube.js/issues/311)) ([e37cf62](https://github.com/Wykerd/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* author and thumbnails for autogenerated playlists ([#251](https://github.com/Wykerd/YouTube.js/issues/251)) ([f5d61d7](https://github.com/Wykerd/YouTube.js/commit/f5d61d70f2c3d4cdf9f5986794b0dcaf74ddd22a))
* browser example ([#197](https://github.com/Wykerd/YouTube.js/issues/197)) ([fcbdae3](https://github.com/Wykerd/YouTube.js/commit/fcbdae3e34ba5c2ac4cc32796ea75a56998a748b))
* build error caused by `music#Playlist.getRelated()` ([#135](https://github.com/Wykerd/YouTube.js/issues/135)) ([4d60679](https://github.com/Wykerd/YouTube.js/commit/4d6067937ad2f6d0d9e470473d8f13c47a7dbd31))
* **build:** mark all deps as external ([d1f2369](https://github.com/Wykerd/YouTube.js/commit/d1f2369e43bb8a78cfadef0a25798846113ba351))
* captions should be a PlayerCaptionsTracklist ([#148](https://github.com/Wykerd/YouTube.js/issues/148)) ([22b2953](https://github.com/Wykerd/YouTube.js/commit/22b2953ec8149cb3746807355be6267f075979b7))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/Wykerd/YouTube.js/issues/299)) ([f62c66d](https://github.com/Wykerd/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **Channel:** getting community continuations ([#329](https://github.com/Wykerd/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/Wykerd/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))
* **Channel:** type mismatch in `subscribe_button` prop ([573c864](https://github.com/Wykerd/YouTube.js/commit/573c8643aae16ec7b6be5b333619a5d8c91ca5c1))
* chooseFormat filtering improvements ([60075f8](https://github.com/Wykerd/YouTube.js/commit/60075f8726853c1fb3e045c241472cc6963be8fc))
* decipher ([ec5a2aa](https://github.com/Wykerd/YouTube.js/commit/ec5a2aa7fd46ebc83c81f1810d437d642f11c159))
* DidYouMean & ShowingResultsFor throwing type errors ([dfd09e9](https://github.com/Wykerd/YouTube.js/commit/dfd09e9683f3a6563ce79962e4a1c2596b9d91db))
* do not return `null` if a renderer is not found ([3d0b217](https://github.com/Wykerd/YouTube.js/commit/3d0b217743d4f7a3aa93856b07ef89a3467f8f87))
* don't remove "VL" from playlist id ([#223](https://github.com/Wykerd/YouTube.js/issues/223)) ([d71b762](https://github.com/Wykerd/YouTube.js/commit/d71b762df57d7ea1c614ef47cfeabe63162f8428))
* download to use getBasicInfo ([41aa54b](https://github.com/Wykerd/YouTube.js/commit/41aa54b8d9d37bfdc94abad81b5959b3b1ed9323))
* emit info Innertube.download ([4ef546b](https://github.com/Wykerd/YouTube.js/commit/4ef546b3f09beaa3b922cc5d7baeed1b1540e486))
* **examples:** fix download stream callback console video info ([4a7c9d7](https://github.com/Wykerd/YouTube.js/commit/4a7c9d7b311cd1ca3581127c8790c39810196f90))
* export `Player` & `Session` classes ([4306197](https://github.com/Wykerd/YouTube.js/commit/43061970c66b8c767c3a7ac456ba22b67e88f0c7))
* filtered search & continuations not working correctly ([0fb0c23](https://github.com/Wykerd/YouTube.js/commit/0fb0c2318a21e37eeb70d5f66d76a502db290e3a))
* **Format:** some types were incorrect ([d8d9286](https://github.com/Wykerd/YouTube.js/commit/d8d92866d10d4e58dbbb683bf8150b2bb594f4a7))
* **http:** android tv http client missing `clientName` ([#370](https://github.com/Wykerd/YouTube.js/issues/370)) ([cb8fafe](https://github.com/Wykerd/YouTube.js/commit/cb8fafe94b8ab330ae58211a892923321d65d890))
* ignore DisplayAd renderer ([521029d](https://github.com/Wykerd/YouTube.js/commit/521029de5275fad11df7c04e468a060843182d78))
* improve sig extraction ([#183](https://github.com/Wykerd/YouTube.js/issues/183)) ([3a7da21](https://github.com/Wykerd/YouTube.js/commit/3a7da21fd18c52a839b966184f87710182567f1b))
* include `thirdParty` prop for requests using `TV_EMBEDDED` ([#198](https://github.com/Wykerd/YouTube.js/issues/198)) ([affbe84](https://github.com/Wykerd/YouTube.js/commit/affbe842842a5b387c50f84699495b69b34d47be))
* Innertube.download ([2cbb017](https://github.com/Wykerd/YouTube.js/commit/2cbb0179ae64cc608c837fc5666b3d6d094ca45c))
* ItemSection `target_id` not being parsed ([d2b3eea](https://github.com/Wykerd/YouTube.js/commit/d2b3eead415f59156efbf8bf8f1a2632f18b528e))
* like/dislike methods not working correctly ([a9f03a1](https://github.com/Wykerd/YouTube.js/commit/a9f03a15238792a572c33eb0335d72c647019782))
* likes not being parsed correctly ([89794d6](https://github.com/Wykerd/YouTube.js/commit/89794d65da3a8987db8aaba12fb1a9020f74492e))
* lint ([d990fc9](https://github.com/Wykerd/YouTube.js/commit/d990fc9b88826c342beebf6fdeb325cffbc92cca))
* **linter:** ignore compiled protobuf ([f4b947f](https://github.com/Wykerd/YouTube.js/commit/f4b947f8e20ff66131944738c87380f31bc8d881))
* **linter:** oops, wrong extension ([5a99190](https://github.com/Wykerd/YouTube.js/commit/5a991901366d6fe8c536a8573aed756e9adfc412))
* **linter:** remove unneeded vars and add jsdoc ([d6bbe8f](https://github.com/Wykerd/YouTube.js/commit/d6bbe8f1838072fee680e4d1e31eadbf97543d00))
* make cookie auth possible again ([2de77c8](https://github.com/Wykerd/YouTube.js/commit/2de77c8f2cef4e987eabd9d468e0e71b7c7c6a9b)), closes [#105](https://github.com/Wykerd/YouTube.js/issues/105)
* minor parsing issues and other improvements  ([#194](https://github.com/Wykerd/YouTube.js/issues/194)) ([dcf2b72](https://github.com/Wykerd/YouTube.js/commit/dcf2b720a09c82a1ad93815d338c0490c84d0da5))
* missing import ([b594dad](https://github.com/Wykerd/YouTube.js/commit/b594dad510a291ec69917269d4176375a8c8c10a))
* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/Wykerd/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **music#Library:** sort_by err when items  &lt;= 1 ([#137](https://github.com/Wykerd/YouTube.js/issues/137)) ([713fd13](https://github.com/Wykerd/YouTube.js/commit/713fd13c74449e00b4f85582a8ffbf8a28a0a421))
* **Music:** search endpoint missing ([f7c1e0f](https://github.com/Wykerd/YouTube.js/commit/f7c1e0f2492cbaa8571df54296fa935cdd9eb5e6)), closes [#242](https://github.com/Wykerd/YouTube.js/issues/242)
* **node:** Electron apps crashing ([#367](https://github.com/Wykerd/YouTube.js/issues/367)) ([e7eacd9](https://github.com/Wykerd/YouTube.js/commit/e7eacd974211c90e7fbddfbf8019388cda3dfa5a))
* **NotificationsCount:** default to 0 ([db77bba](https://github.com/Wykerd/YouTube.js/commit/db77bba802b41c0eb429f58eaaad0e6ba614592d))
* oopsie ([71309a0](https://github.com/Wykerd/YouTube.js/commit/71309a078802db2a3cc80eba290a2e0c978416c6))
* oopsie, forgot to remove the video id while debugging ([2d7fe04](https://github.com/Wykerd/YouTube.js/commit/2d7fe04a8a5d0589717e91a427d0a2449d41b61e))
* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/Wykerd/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/Wykerd/YouTube.js/issues/321)
* **parser:** Make Video.is_live work on channel pages ([#368](https://github.com/Wykerd/YouTube.js/issues/368)) ([bd35faa](https://github.com/Wykerd/YouTube.js/commit/bd35faa5978f0b822e98d019523be1303374ddc0))
* **PlayerCaptionsTracklist:** parse props only if they exist in the node ([470d8d9](https://github.com/Wykerd/YouTube.js/commit/470d8d94063f0159cd005c9eb15fd1a4a175bea0)), closes [#372](https://github.com/Wykerd/YouTube.js/issues/372)
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/Wykerd/YouTube.js/issues/320)) ([a0e6cef](https://github.com/Wykerd/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* playlist radios misidentified as videos ([#147](https://github.com/Wykerd/YouTube.js/issues/147)) ([a4965ee](https://github.com/Wykerd/YouTube.js/commit/a4965ee43d15d846f29a9ca99323720e4d65f06a))
* **Playlist:** trying to parse an already parsed response ([#286](https://github.com/Wykerd/YouTube.js/issues/286)) ([e8af2a6](https://github.com/Wykerd/YouTube.js/commit/e8af2a603d4969a788f93cdfa0b1062ba598b86f))
* **pm:** check before setting video ids ([7400b8a](https://github.com/Wykerd/YouTube.js/commit/7400b8a9d9819e94ff096f4cd8673e6d34ee240d))
* race condition causing “update-credentials” to fire multiple times ([c16d632](https://github.com/Wykerd/YouTube.js/commit/c16d632b318e65a4355bbe2e064fbb825a7e8055))
* refactor `Analytics` to use memo ([dff535a](https://github.com/Wykerd/YouTube.js/commit/dff535a9e278dbb45a0ede5a82d4cbacd71c503d))
* refinement cards getter returning undefined ([3c98244](https://github.com/Wykerd/YouTube.js/commit/3c98244c3bc1d5e7c1e73fb014cab4cb3ba1b1e7))
* rename YouTube Music renderers ([51f7adf](https://github.com/Wykerd/YouTube.js/commit/51f7adf3971f25c878003b0490cfea99197c869d))
* replace `s` placeholders in playback tracking urls ([88ebb5e](https://github.com/Wykerd/YouTube.js/commit/88ebb5e2ae44374be4561fd022135e9ae0fb1db1))
* search continuations not being parsed correctly  ([#173](https://github.com/Wykerd/YouTube.js/issues/173)) ([c9856a8](https://github.com/Wykerd/YouTube.js/commit/c9856a835962f3f5368ad619b70e5951824a1f11))
* search continuations should return a `Search` class ([4c7a42d](https://github.com/Wykerd/YouTube.js/commit/4c7a42d8d4c0fea76ce29bf64d7bd4255a9c207a))
* **Search:** check if WatchCardHeroVideo is null before casting ([2a87f42](https://github.com/Wykerd/YouTube.js/commit/2a87f42b32c5ae3be76fd85960a3da464085c647)), closes [#243](https://github.com/Wykerd/YouTube.js/issues/243)
* **Search:** Return search results even if there are ads ([#373](https://github.com/Wykerd/YouTube.js/issues/373)) ([2c5907f](https://github.com/Wykerd/YouTube.js/commit/2c5907f80fd76452afe87d1722fe35a4f45a22e0))
* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/Wykerd/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* send correct UA for Android requests ([f4e0f30](https://github.com/Wykerd/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/Wykerd/YouTube.js/issues/322)
* **session:** `visitorData` and `originalUrl` ([1eda93e](https://github.com/Wykerd/YouTube.js/commit/1eda93ee08b7985a451ce26e2842bfa35cfe5e3a))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/Wykerd/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* signature decipher extraction failing ([#249](https://github.com/Wykerd/YouTube.js/issues/249)) ([be157ef](https://github.com/Wykerd/YouTube.js/commit/be157ef0165c6a428203afca65fc2cc80eca1bee))
* stringify ChipCloudChip text ([75e0453](https://github.com/Wykerd/YouTube.js/commit/75e0453f69a05f053a9fb7e579e108641d85396c))
* TabbedFeed#getTab to parse response. ([#120](https://github.com/Wykerd/YouTube.js/issues/120)) ([dbfcb36](https://github.com/Wykerd/YouTube.js/commit/dbfcb36fd7f6ec72363b5cf5838e56d3c8cbf2b4))
* **tests:** require deciphers only when needed ([1837d49](https://github.com/Wykerd/YouTube.js/commit/1837d4929c005269153e4011d4e7c094423d1599))
* **toDash:** Generate unique Representation ids ([#366](https://github.com/Wykerd/YouTube.js/issues/366)) ([a8b507e](https://github.com/Wykerd/YouTube.js/commit/a8b507ee65ccd8edc9aea2aef8a908fa272bb23c))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/Wykerd/YouTube.js/issues/302)) ([d612590](https://github.com/Wykerd/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* use `WEB` client in `setNotificationPreferences` ([6f3deaf](https://github.com/Wykerd/YouTube.js/commit/6f3deaf16aa6b7b4065c45946a68c4daff728a60))
* **Utils:** Properly parse timestamps with thousands separators ([#363](https://github.com/Wykerd/YouTube.js/issues/363)) ([1c72a41](https://github.com/Wykerd/YouTube.js/commit/1c72a41675e47f711bd61ebb898bca5527406a79))
* **VideoInfo:** Fix the problem that chooseFormat still returns empty even though there are videos to adapt. ([4088ef5](https://github.com/Wykerd/YouTube.js/commit/4088ef59c6188c67833e5b3dd0278457e0538230))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/Wykerd/YouTube.js/issues/288)) ([13ad377](https://github.com/Wykerd/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))
* **VideoInfo:** watch next feed not being parsed when logged out ([#276](https://github.com/Wykerd/YouTube.js/issues/276)) ([d69d701](https://github.com/Wykerd/YouTube.js/commit/d69d70186925e6b5c97cad29ea6f6c7a6d1d2f6c))
* **VideoSecondaryInfo:** `subscribe_button` can also be just a `Button` ([4484f78](https://github.com/Wykerd/YouTube.js/commit/4484f78394bb96f43458d1a2615b7e4ba5574cf4))
* WatchCardHeroVideo accessibilityData parse error ([#231](https://github.com/Wykerd/YouTube.js/issues/231)) ([4c00f15](https://github.com/Wykerd/YouTube.js/commit/4c00f15f55eddcd79175aaef02795542f2d3f957))
* wrong element name ([#217](https://github.com/Wykerd/YouTube.js/issues/217)) ([19d579d](https://github.com/Wykerd/YouTube.js/commit/19d579df13ae3cfdc8b3a3d0eaebe44325644888))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/Wykerd/YouTube.js/issues/341)) ([95f1d40](https://github.com/Wykerd/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* ytmusic formats returning 401 when deciphered ([#161](https://github.com/Wykerd/YouTube.js/issues/161)) ([4f01553](https://github.com/Wykerd/YouTube.js/commit/4f015536ac2a5bb92546bf9f278227f4ab0d32b0))
* **ytmusic:** `fix music#getLyrics()` & `music#getUpNext()` ([4d33240](https://github.com/Wykerd/YouTube.js/commit/4d332402dbefee32b97c83c7fbe2a824de846deb))
* **ytmusic:** `music#getRelated()` now works again ([2599e73](https://github.com/Wykerd/YouTube.js/commit/2599e734b87b09081f6f61217427a0d78aa67255))
* **ytmusic:** check if id is valid before proceeding ([bb3f3cc](https://github.com/Wykerd/YouTube.js/commit/bb3f3cc584621c3c91f33e4b417c5777d7fda5b0))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/Wykerd/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))
* **ytmusic:** Multiple authors/artists ([#82](https://github.com/Wykerd/YouTube.js/issues/82)) ([8849a01](https://github.com/Wykerd/YouTube.js/commit/8849a01ecfff1fadbb0577a659ecf888312040be))
* **ytmusic:** oopsie, forgot to declare `player_overlays` ([3828029](https://github.com/Wykerd/YouTube.js/commit/38280290f739a204fa93af29788103ec699ff7c0))
* **ytmusic:** parse nav endpoints only if they exist ([6eef4b7](https://github.com/Wykerd/YouTube.js/commit/6eef4b746b9dbf8ec78d5d82eaca7e9d109aab72))
* **ytmusic:** rename old class types ([e8a8108](https://github.com/Wykerd/YouTube.js/commit/e8a81084e69df1370838137df89c66d33b21fda1))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/Wykerd/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/Wykerd/YouTube.js/issues/279)


### Performance Improvements

* use `getBasicInfo()` ([28d51fc](https://github.com/Wykerd/YouTube.js/commit/28d51fcc4fcaacc09eebfea01b4ead85b457aa50))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/Wykerd/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/Wykerd/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
* feature complete contents parser ([4a10287](https://github.com/Wykerd/YouTube.js/commit/4a102878d870f20217cf58dbb3930ce263b78d76))
* finish parser migration ([68cb841](https://github.com/Wykerd/YouTube.js/commit/68cb841c0058ec5aac7b79b7736fdf57b825da3c))
* fix inconsistent use of `SuperParsedResult` ([40fc24b](https://github.com/Wykerd/YouTube.js/commit/40fc24b043ce030df788d3a9ceec24938494b132))
* migrate core renderers to TypeScript ([709c448](https://github.com/Wykerd/YouTube.js/commit/709c4480534ef2e86671998dea3337017a846e4a))
* **Parser:** general refactoring of parsers ([#344](https://github.com/Wykerd/YouTube.js/issues/344)) ([b13bf6e](https://github.com/Wykerd/YouTube.js/commit/b13bf6e9926c19a1939e0f4b69cbd53d1af0f7c8))
* rewrite `Analytics` to TypeScript ([#122](https://github.com/Wykerd/YouTube.js/issues/122)) ([adae925](https://github.com/Wykerd/YouTube.js/commit/adae925367ca873d884ccd4f8189e888103cd8e5))
* rewrite `History` to TypeScript ([99233bc](https://github.com/Wykerd/YouTube.js/commit/99233bcf7a5e1a116cb209793eab47831f45b079))
* rewrite `MusicNavigationButton` to TypeScript ([3abcde7](https://github.com/Wykerd/YouTube.js/commit/3abcde7e67bff711400f47be9f509d326b4aeb2b))
* rewrite `PlaylistManager` ([d8266ff](https://github.com/Wykerd/YouTube.js/commit/d8266ff7863562b8ec57a1d2f909869f129073f2)), closes [#101](https://github.com/Wykerd/YouTube.js/issues/101)
* **ytmusic:** rewrite `Album` to TypeScript ([72c3af8](https://github.com/Wykerd/YouTube.js/commit/72c3af84b07c3b183f3bbed0ab1d86c83c79c779))

## [4.2.0](https://github.com/LuanRT/YouTube.js/compare/v4.1.1...v4.2.0) (2023-04-09)


### Features

* Enable importHelpers in tsconfig to reduce output size ([#378](https://github.com/LuanRT/YouTube.js/issues/378)) ([0b301de](https://github.com/LuanRT/YouTube.js/commit/0b301de6a1e1352a64881c1751a84360922a77cd))
* **parser:** ignore PrimetimePromo node ([ce9d9c5](https://github.com/LuanRT/YouTube.js/commit/ce9d9c56b4f45c0139d74edc95c295ecfd1ee4b1))
* **PlaylistVideo:** Extract video_info and accessibility_label texts ([#376](https://github.com/LuanRT/YouTube.js/issues/376)) ([c9135e6](https://github.com/LuanRT/YouTube.js/commit/c9135e66d3c9c72b8d063eedcf3cc2123800946d))

## [4.1.1](https://github.com/LuanRT/YouTube.js/compare/v4.1.0...v4.1.1) (2023-03-29)


### Bug Fixes

* **PlayerCaptionsTracklist:** parse props only if they exist in the node ([470d8d9](https://github.com/LuanRT/YouTube.js/commit/470d8d94063f0159cd005c9eb15fd1a4a175bea0)), closes [#372](https://github.com/LuanRT/YouTube.js/issues/372)
* **Search:** Return search results even if there are ads ([#373](https://github.com/LuanRT/YouTube.js/issues/373)) ([2c5907f](https://github.com/LuanRT/YouTube.js/commit/2c5907f80fd76452afe87d1722fe35a4f45a22e0))

## [4.1.0](https://github.com/LuanRT/YouTube.js/compare/v4.0.1...v4.1.0) (2023-03-24)


### Features

* **Session:** allow setting a custom visitor data token ([#371](https://github.com/LuanRT/YouTube.js/issues/371)) ([13ebf0a](https://github.com/LuanRT/YouTube.js/commit/13ebf0a03973e7ba7b65e9f72c4333927e4254f6))
* **ShowingResultsFor:** parse all props ([1d9587e](https://github.com/LuanRT/YouTube.js/commit/1d9587e8c1ee0b11bb0e444c3d1e98162e9e1059))


### Bug Fixes

* **http:** android tv http client missing `clientName` ([#370](https://github.com/LuanRT/YouTube.js/issues/370)) ([cb8fafe](https://github.com/LuanRT/YouTube.js/commit/cb8fafe94b8ab330ae58211a892923321d65d890))
* **node:** Electron apps crashing ([#367](https://github.com/LuanRT/YouTube.js/issues/367)) ([e7eacd9](https://github.com/LuanRT/YouTube.js/commit/e7eacd974211c90e7fbddfbf8019388cda3dfa5a))
* **parser:** Make Video.is_live work on channel pages ([#368](https://github.com/LuanRT/YouTube.js/issues/368)) ([bd35faa](https://github.com/LuanRT/YouTube.js/commit/bd35faa5978f0b822e98d019523be1303374ddc0))
* **toDash:** Generate unique Representation ids ([#366](https://github.com/LuanRT/YouTube.js/issues/366)) ([a8b507e](https://github.com/LuanRT/YouTube.js/commit/a8b507ee65ccd8edc9aea2aef8a908fa272bb23c))
* **Utils:** Properly parse timestamps with thousands separators ([#363](https://github.com/LuanRT/YouTube.js/issues/363)) ([1c72a41](https://github.com/LuanRT/YouTube.js/commit/1c72a41675e47f711bd61ebb898bca5527406a79))

## [4.0.1](https://github.com/LuanRT/YouTube.js/compare/v4.0.0...v4.0.1) (2023-03-16)


### Bug Fixes

* **Channel:** type mismatch in `subscribe_button` prop ([573c864](https://github.com/LuanRT/YouTube.js/commit/573c8643aae16ec7b6be5b333619a5d8c91ca5c1))

## [4.0.0](https://github.com/LuanRT/YouTube.js/compare/v3.3.0...v4.0.0) (2023-03-15)


### ⚠ BREAKING CHANGES

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344))
* The `toDash` functions are now asynchronous, they now return a `Promise<string>` instead of a `string`, as we need to fetch the first sequence of the OTF format streams while building the manifest.

### Features

* Add support for OTF format streams ([3e4d41b](https://github.com/LuanRT/YouTube.js/commit/3e4d41bf06ba16232979977c705444f2032bcde6))
* **parser:** add `GridMix` ([#356](https://github.com/LuanRT/YouTube.js/issues/356)) ([a8e7e64](https://github.com/LuanRT/YouTube.js/commit/a8e7e644ec6df3b3c98a313f0321da27b4ca456e))
* **parser:** add `GridShow` and `ShowCustomThumbnail` ([8ef4b42](https://github.com/LuanRT/YouTube.js/commit/8ef4b42d444c4fbe5cd65a55c0e0e7aa31738755)), closes [#459](https://github.com/LuanRT/YouTube.js/issues/459)
* **parser:** add `MusicCardShelf` ([#358](https://github.com/LuanRT/YouTube.js/issues/358)) ([9b005d6](https://github.com/LuanRT/YouTube.js/commit/9b005d62d6590a2ddf6848dabfa33fce36e8df9c))
* **parser:** Add `play_all_button` to `Shelf` ([#345](https://github.com/LuanRT/YouTube.js/issues/345)) ([427db5b](https://github.com/LuanRT/YouTube.js/commit/427db5bbc2bf3e8ec60371d504c2ab1cdae6e918))
* **parser:** add `view_playlist` to `Playlist` ([#348](https://github.com/LuanRT/YouTube.js/issues/348)) ([9cb4530](https://github.com/LuanRT/YouTube.js/commit/9cb45302997771d909487b1ecba6f38655abef48))
* **parser:** add InfoPanelContent and InfoPanelContainer nodes ([4784dfa](https://github.com/LuanRT/YouTube.js/commit/4784dfa563a4dbeaee31811824d5aa37a67f5557)), closes [#326](https://github.com/LuanRT/YouTube.js/issues/326)
* **Parser:** just-in-time YTNode generation ([#310](https://github.com/LuanRT/YouTube.js/issues/310)) ([2cee590](https://github.com/LuanRT/YouTube.js/commit/2cee59024c730c34aa06052849ed6fb3f862ef33))
* **yt:** add support for movie items and trailers ([#349](https://github.com/LuanRT/YouTube.js/issues/349)) ([9f1c31d](https://github.com/LuanRT/YouTube.js/commit/9f1c31d7a09532e80a187b14acceff31c22579bf))


### Code Refactoring

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344)) ([b13bf6e](https://github.com/LuanRT/YouTube.js/commit/b13bf6e9926c19a1939e0f4b69cbd53d1af0f7c8))

## [3.3.0](https://github.com/LuanRT/YouTube.js/compare/v3.2.0...v3.3.0) (2023-03-09)


### Features

* **parser:** add `ConversationBar` node ([b2253df](https://github.com/LuanRT/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/LuanRT/YouTube.js/issues/342)) ([0d35fe0](https://github.com/LuanRT/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))


### Bug Fixes

* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/LuanRT/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/LuanRT/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/LuanRT/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/LuanRT/YouTube.js/issues/279)

## [3.2.0](https://github.com/LuanRT/YouTube.js/compare/v3.1.1...v3.2.0) (2023-03-08)


### Features

* Add support for descriptive audio tracks ([#338](https://github.com/LuanRT/YouTube.js/issues/338)) ([574b67a](https://github.com/LuanRT/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* export `FormatUtils`' types ([2d774e2](https://github.com/LuanRT/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/LuanRT/YouTube.js/issues/337)) ([95033e7](https://github.com/LuanRT/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** SharedPost ([#332](https://github.com/LuanRT/YouTube.js/issues/332)) ([ce53ac1](https://github.com/LuanRT/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/LuanRT/YouTube.js/issues/333)) ([214aa14](https://github.com/LuanRT/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/LuanRT/YouTube.js/issues/340)) ([a511608](https://github.com/LuanRT/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/LuanRT/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/LuanRT/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))


### Bug Fixes

* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/LuanRT/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/LuanRT/YouTube.js/issues/341)) ([95f1d40](https://github.com/LuanRT/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/LuanRT/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))

## [3.1.1](https://github.com/LuanRT/YouTube.js/compare/v3.1.0...v3.1.1) (2023-03-01)


### Bug Fixes

* **Channel:** getting community continuations ([#329](https://github.com/LuanRT/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/LuanRT/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))

## [3.1.0](https://github.com/LuanRT/YouTube.js/compare/v3.0.0...v3.1.0) (2023-02-26)


### Features

* Add upcoming and live info to playlist videos ([#317](https://github.com/LuanRT/YouTube.js/issues/317)) ([a0bfe16](https://github.com/LuanRT/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/LuanRT/YouTube.js/issues/325)) ([f933cb4](https://github.com/LuanRT/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))


### Bug Fixes

* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/LuanRT/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/LuanRT/YouTube.js/issues/321)
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/LuanRT/YouTube.js/issues/320)) ([a0e6cef](https://github.com/LuanRT/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* send correct UA for Android requests ([f4e0f30](https://github.com/LuanRT/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/LuanRT/YouTube.js/issues/322)

## [3.0.0](https://github.com/LuanRT/YouTube.js/compare/v2.9.0...v3.0.0) (2023-02-17)


### ⚠ BREAKING CHANGES

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306))

### Features

* add parser support for MultiImage community posts ([#298](https://github.com/LuanRT/YouTube.js/issues/298)) ([de61782](https://github.com/LuanRT/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add support for hashtag feeds ([#312](https://github.com/LuanRT/YouTube.js/issues/312)) ([bf12740](https://github.com/LuanRT/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* add support for YouTube Kids ([#291](https://github.com/LuanRT/YouTube.js/issues/291)) ([2bbefef](https://github.com/LuanRT/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* allow checking whether a channel has optional tabs ([#296](https://github.com/LuanRT/YouTube.js/issues/296)) ([ceefbed](https://github.com/LuanRT/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/LuanRT/YouTube.js/issues/303)) ([b2900f4](https://github.com/LuanRT/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/LuanRT/YouTube.js/issues/295)) ([50ef712](https://github.com/LuanRT/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* extract channel error alert ([0b99180](https://github.com/LuanRT/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/LuanRT/YouTube.js/issues/308)) ([a69e43b](https://github.com/LuanRT/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* improve support for dubbed content ([#293](https://github.com/LuanRT/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/LuanRT/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* parse isLive in CompactVideo ([#294](https://github.com/LuanRT/YouTube.js/issues/294)) ([2acb7da](https://github.com/LuanRT/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/LuanRT/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** Text#toHTML ([#300](https://github.com/LuanRT/YouTube.js/issues/300)) ([e82e23d](https://github.com/LuanRT/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **ytkids:** add `getChannel()` ([#292](https://github.com/LuanRT/YouTube.js/issues/292)) ([0fc29f0](https://github.com/LuanRT/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))


### Bug Fixes

* assign MetadataBadge's label ([#311](https://github.com/LuanRT/YouTube.js/issues/311)) ([e37cf62](https://github.com/LuanRT/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/LuanRT/YouTube.js/issues/299)) ([f62c66d](https://github.com/LuanRT/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/LuanRT/YouTube.js/issues/302)) ([d612590](https://github.com/LuanRT/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/LuanRT/YouTube.js/issues/288)) ([13ad377](https://github.com/LuanRT/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/LuanRT/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
