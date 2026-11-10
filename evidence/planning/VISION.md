# Vision · Dự án zombie co-op

User-directed loop revision, 2026-11-06: missions use continuous live play. Preparation is a
choice of place/time before noisy objective triggers, not a separate player mode. Purchases
require a physical resupply/merchant service protected by real layout and doors; shopping
does not pause the world or grant immunity. Devices use long timed deployment throughout the
mission. [Design and migration acceptance](contracts/SEAMLESS_MISSION_FLOW_2026-11-06.md), BL-116.

User-directed mission refinement,2026-10-25: the primary loop is now escape through connected
spaces on one persistent Tiled map. Brief defense buys time for gates to open, then the team
must move onward with its remaining equipment and live pursuers. See
[the escape contract](contracts/ESCAPE_MISSION_DESIGN_2026-10-25.md) and D-089. Preserve heavy
combat, modular zombie feedback and preparation decisions; this does not remove the planned
NPC, checkpoint, carry-over or LAN scope. The connected two-gate local runtime slice is
playable; see its [scoped handoff](contracts/FULL_ESCAPE_ROUTE_2026-11-01.md) and
[verification](reviews/2026-11-01-002-continuous-escape-route.md). Full-map art, human pacing,
broader lifetime proof and LAN acceptance remain open.

**Game title: Black Veil**, selected by the user on 2026-11-03. The
[naming decision](GAME_NAME_DECISION.md) retains all twelve proposals and the selection evidence.
Runtime branding comes only from `content/app/application.json`. The course/workspace name is
not the game title; content IDs, namespaces, build targets and protocol identity stay stable.

Trạng thái: **Hướng sản phẩm và các yêu cầu nền tảng đã được người dùng xác nhận; cơ chế chi tiết và thông số còn cần playtest.**

## Trải nghiệm hướng tới

> Một đội nhân vật tiến qua các khu phố bị zombie chiếm, chuẩn bị trang bị, bố trí đồng đội/trụ súng/bom rồi trực tiếp tham chiến bằng hỏa lực lớn và cận chiến để mở đường tới checkpoint tiếp theo.

Tham chiếu do người dùng nêu: Vampire Survivors, Project Zomboid, Dynasty Warriors và nhóm nhân vật kiểu Resident Evil. Đây là định hướng trải nghiệm, không phải yêu cầu sao chép toàn bộ hệ thống của các game đó.

## Các yêu cầu đã chốt

- 2026-10-10: replace the static street backdrop with a walkable world and follow camera.
  Map layout is native Tiled JSON (`.tmj` / external `.tsj`), with independently editable
  visual, collision and gameplay-marker layers. Reuse existing authored tiles/street art.
  This direction does not require procedural generation or infinite-map streaming.

- Top-down góc nghiêng thấy mặt/thân, pixel art; bốn hướng trước, mở rộng tám hướng.
- Hướng mỹ thuật anime: sprite gameplay vẫn pixel art; avatar hội thoại là chân dung anime 2D rõ nét, cùng character identity. Body parts/layers phải tồn tại thật ở source và runtime, không thay bằng sheet toàn thân một hướng. Chi tiết ở [ART_DIRECTION](ART_DIRECTION.md).
- Khoảng **100 zombie trên màn hình**, ưu tiên FPS cao; chưa có phần cứng chuẩn hoặc cam kết FPS.
- Zombie đông và yếu là nền; biến thể làm thay đổi cách đối phó.
- AI hỗ trợ NPC; người chơi chọn nhân vật để tham gia. Số NPC độc lập với số slot người chơi.
- Co-op: một người host, người khác trong LAN vào; lobby mặc định tối đa bốn người qua config, không hard-code. Có interface để thêm Steam lobby sau.
- Chủ đề hỏa lực, đạn dược, oanh tạc; kết hợp bắn chủ động, hỏa lực tự động từ đội/trụ và bom. Cận chiến có giá trị.
- Chuẩn bị và trực tiếp chiến đấu có sức nặng ngang nhau: bỏ chuẩn bị là mất khoảng một nửa tiềm năng. Đây không phải tỉ lệ thời lượng hay một hệ số damage cố định.
- Đi qua nhiều khu phố, dừng bố trí rồi tiếp tục; phá được vật nhỏ như thùng, rào và xe.
- Stagger/knockback, hất tung, ngã/đứng dậy; đứt chi khi chết trong V1, mở rộng thương tật sống sau.
- Bổ sung 2026-10-05: hitbox từng đầu/thân/tay/chân; bắn trúng phần nào thì phần đó văng, có gore
  particle và animation chết Walker tương ứng. [Design/handoff](contracts/LOCATIONAL_GORE.md)
  mở rộng V1 death-only; live sever tối thiểu cần refinement, chưa runtime/asset mới được nghiệm thu.
- Asset nhiều part/layer, nguồn AI được chỉnh sửa và làm animation có kiểm soát.
- Chỉnh thông số trong game, lưu ra JSON; sửa JSON ngoài game cũng được.
- Người chơi chết/rời trận rớt tài nguyên cho người khác nhặt; vào lại chờ hồi sinh ở checkpoint tiếp theo. Chi tiết xử lý connection nằm trong COOP.
- Thời gian hiện hành **11 tuần: 8 tuần gốc + 3 tuần Sprint 1.2**, người dùng cho thêm ngày 2026-10-05, giữ phạm vi các sprint sau; làm với nhiều AI agent. Ngày bắt đầu và capacity chưa chốt.

## Trụ cột thiết kế

1. **Chuẩn bị có tác dụng:** chọn trang bị, hướng trụ, vị trí bom và nhiệm vụ NPC làm thay đổi năng lực đội.
2. **Tham chiến có giá trị:** ngắm/bắn, đổi vị trí, cận chiến giải vây và kích hoạt hỗ trợ đúng lúc.
3. **Đàn dễ đọc:** đông nhưng vẫn thấy player, elite, telegraph và đường thoát.
4. **Co-op nhất quán:** server quyết định luật; client có thể giảm hiệu ứng để giữ FPS mà không đổi kết quả trận.

## Bản phát triển đề xuất · baseline 11 tuần

Phạm vi dưới giữ từ baseline hai tháng; ba tuần thêm tập trung chất lượng animation/reaction,
chết vỡ xác, feedback hỏa lực và một support salvo trong [Sprint 1.2](sprints/SPRINT_01_2.md).
Không lấy thêm thời gian để mặc định nhân hệ thống; chi tiết gameplay là proposal cần thử.

Một nhiệm vụ đi qua **hai khu phố nhỏ**, có preparation, giao chiến và checkpoint. Một bộ nhân vật tối thiểu, NPC hỗ trợ, một loại trụ, một loại bom, một súng chính và một đòn cận chiến. Walker hoàn chỉnh, runner tiếp theo; bulwark nếu còn thời gian sau khi co-op và core loop đã chạy.

Live-sever/down-crawl tối thiểu nay theo yêu cầu mới BL-048, cần refine capacity và giữ timebox;
injury framework rộng, Steam integration, host migration, phá nhà và map mở lớn vẫn thuộc phần
mở rộng chưa nhận. Co-op LAN, modular zombie và vòng chuẩn bị → chiến đấu thuộc nền tảng,
không để tới cuối kỳ mới ghép vào.

Phản hồi 2026-10-04: prototype thiếu mục tiêu/lựa chọn, combat chưa hấp dẫn và chuẩn bị/phối hợp chưa có sức nặng. [GAMEPLAY_DESIGN](GAMEPLAY_DESIGN.md) đề xuất nhiệm vụ mở đường tiếp tế, bắt đầu một encounter 3–5 phút rồi mở thành hai khu 10–15 phút. Ngân sách trụ/bom, carry-over, route tùy chọn và nhịp horde là giả thuyết thiết kế cần thử; chưa phải cơ chế được người dùng chốt hoặc đã implement. Mục tiêu kiểm chứng là người chơi muốn thử lại với kế hoạch khác.

## Tiêu chí kiểm chứng

- Cùng một encounter/seed, so bốn cách chơi: chuẩn bị tốt + chơi chủ động; chuẩn bị tốt + chơi thụ động; chuẩn bị kém + chơi tốt; cả hai kém. Ghi tiến độ mục tiêu, tài nguyên mất, damage đóng góp và số lần chết.
- Cả chuẩn bị và thực thi đều phải có đóng góp lớn, bổ sung cho nhau; tránh trụ tự giải quyết tất cả hoặc kỹ năng cá nhân vô hiệu hóa nhu cầu setup. Không ép mọi số đo chính xác 50/50 trong từng trận.
- Tối đa bốn client mặc định có thể vào, chọn nhân vật, cùng phá vật thể và qua checkpoint nhất quán.
- Mất kết nối/chết không tạo tài nguyên trùng; reconnect không sinh lại ngay ở chỗ chết.
- Scene chuẩn có 100 zombie nhìn thấy cùng đội/trụ/bom/VFX; báo cáo frame-time client và tick-time server trên máy được ghi rõ.

## Hiện trạng

Audit source 2026-10-03: đã có demo gameplay local C++17/Raylib 6.0 trên MSVC x64/CMake, loader config, renderer, tests, asset_preview, exporter và hai walk study hướng nam theo [art/README.md](../art/README.md). Các study chưa phải rig modular bốn hướng hoàn chỉnh. Chưa có inspector đầy đủ, server/co-op hoặc benchmark production. Xem [audit kiến trúc](ARCHITECTURE.md) và [backlog](BACKLOG.md) để theo dõi phần thiếu.

Đọc [ASSETS.md](ASSETS.md), [ZOMBIES.md](ZOMBIES.md), [COOP.md](COOP.md), [ARCHITECTURE.md](ARCHITECTURE.md) và [PLAN.md](PLAN.md).

Còn cần xác định trước production: roster nhân vật, cấu hình máy chuẩn, ngân sách hình ảnh/âm thanh, loại tài nguyên rơi cụ thể và quy tắc ammo/trang bị khi hồi sinh.
