# Portfolio TO DO

## 🔜 Next Session (2026-02-27)

### Three.js Vaporwave 3D Terrain
Replace the current flat grid floor with a proper Three.js wireframe mountain terrain.

**Goal:** Replicate the synthwave mountain aesthetic from the Anathema GD level — neon-colored wireframe peaks with real 3D perspective and a bloom glow effect.

**Planned approach:**
1. Install `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
2. Create a `VaporwaveTerrain.jsx` component with a `<Canvas>` and perspective camera
3. Use `PlaneGeometry` with displaced vertices (Simplex noise) to form mountain ridges
4. Apply `MeshBasicMaterial({ wireframe: true })` — neon magenta/pink color
5. Add `Bloom` post-processing from `@react-three/postprocessing` for the neon glow
6. Animate the terrain scrolling toward the viewer (shift UV/vertex offsets over time)
7. Hook into the existing `sun-color-cycle` hue-rotate so terrain color shifts with the sun
8. Replace the existing terrain section in `RetroBackground.jsx` with this component

**Reference:** The Anathema GD level screenshot — blue/purple wireframe mountains in the foreground against the sun.
