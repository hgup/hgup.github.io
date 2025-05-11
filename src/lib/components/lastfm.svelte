<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let username;

  let trackName = "";
  let artistName = "";
  let albumName = "";
  let imageUrl = "";
  let isPlaying = false;
  let loading = true; // Add a loading state

  onMount(async () => {
    try {
      const response = await fetch(
        `https://lastfm-last-played.biancarosa.com.br/${username}/latest-song`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // Check if the track data exists
      if (data && data.track) {
        trackName = data.track.name;
        artistName = data.track.artist["#text"];
        albumName = data.track.album["#text"];
        // Use a default image if no images are available
        imageUrl = data.track.image?.length
          ? data.track.image[0]["#text"]
          : "/placeholder.png"; // Get the 'small' image
        isPlaying = data.track["@attr"]?.nowplaying === "true";
      } else {
        // Handle the case where data.track is undefined or null.  Set to empty.
        trackName = "No track data available";
        artistName = "No artist data available";
        albumName = "No album data available";
        imageUrl = "/placeholder.png";
        isPlaying = false;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // set error state.  Important to handle errors.
      trackName = "";
      artistName = "Error loading artist";
      albumName = "Error loading album";
      imageUrl = "/placeholder.png";
      isPlaying = false;
    } finally {
      loading = false; // Set loading to false when fetch is complete, success or fail
    }
  });
</script>


  <div class="relative w-full flex items-center mx-auto pt-10 pb-3 px-6 h-[40px] min-w-xl">
    {#if loading}
      <div class="absolute inset-0 flex flex-col " out:fade><p class="text-xs text-secondary pt-8">Was listening to...</p></div>
    {:else if trackName}
    <div class='mx-auto'>
      <div class="flex xl:max-w-[13rem]" in:fade={{delay: 400}}>
        <img
          src={imageUrl}
          alt="{albumName} album art"
          class="rounded-md mr-4"
          style="width: 40px; height: 40px;"
        />
        <div class="flex-1 overflow-hidden">
          <p class="text-left text-sm font-semibold text-primary truncate">
            {trackName}
          </p>
          <p class="text-xs text-left text-secondary truncate">
            Artist: {artistName}
          </p>
        </div>
      </div>
</div>
    {:else}
      <p class="text-gray-600 text-sm">Not listening to anything.</p>
    {/if}
  </div>
