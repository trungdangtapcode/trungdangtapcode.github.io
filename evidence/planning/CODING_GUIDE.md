# Coding guide · Quy ước cho team

Quy ước áp dụng cho code mới và phần code được sửa. Mục tiêu: đọc được, rõ ownership, dễ test và dễ chia việc; cùng một cách làm giữa người và AI agent. Không reformat toàn repo chỉ để áp dụng style.

**Study/prototype không được miễn clean code.** Viết gọn, tên rõ, mỗi hàm một trách nhiệm;
tái sử dụng pipeline hiện có, không copy hệ thống hoặc hardcode để chạy một case. Code study
cũng theo guide này; phần tạm phải có giới hạn và cách loại bỏ rõ trước khi tích hợp runtime.

Đây là nguồn chuẩn cho format/naming đã được plan. Task mới phải theo các quy ước bên dưới và cấu hình formatter hiện có; không tự đưa một style thứ hai vào module mới. [PLAN.md](PLAN.md) quy định mốc develop/maintain/scale và tham chiếu guide này. AGENTS.md tại root dùng tiếng Anh để team và AI agent cùng tuân theo.

## 0. Reuse first — đứng trên vai người khổng lồ

**Đây là nguyên tắc bắt buộc theo yêu cầu người dùng: không tự code toàn bộ từ đầu.** Được chủ động sử dụng repo, codebase, framework, thư viện, tool, asset, ý tưởng, design và architecture có sẵn khi phù hợp. Tái sử dụng tốt được ưu tiên hơn việc sở hữu nhiều code tự viết.

Quy trình cho một hệ thống mới:

1. Xem dependency/tiện ích hiện có có đáp ứng được không.
2. Nếu là bài toán phổ biến, tìm repo/tool/thư viện phù hợp và đọc tài liệu/source chính thức trước khi thiết kế bản riêng.
3. Thử tích hợp nhỏ với use case thật. Chọn giải pháp giảm tổng công sức triển khai, bảo trì và debug trong phạm vi hai tháng hiện tại của PLAN.
4. Dùng API trực tiếp hoặc adapter mỏng ở boundary thật. Fork/chỉnh chỉ phần cần thiết khi cần.
5. Tự viết khi đó là gameplay riêng hoặc giải pháp có sẵn không đáp ứng; ghi lý do ngắn để team hiểu.

| Hạng mục | Hướng ưu tiên |
| --- | --- |
| Window, input, render, audio | Tận dụng Raylib đang dùng |
| JSON, schema validation, serialization | Thư viện đã có; tự viết mapping/semantic validation của game |
| UDP reliability, connection, encryption | Transport library; tự viết protocol gameplay/session contract |
| GUI inspector, editor widgets | GUI/toolkit sẵn có; tự viết panel và binding với definitions |
| Atlas packing, sprite export, image/audio tooling | CLI/exporter/packer sẵn có; glue chuyển về contract của game |
| Math, containers, ECS, navigation, collision | STL/thư viện/implementation phù hợp trước; profile để chọn |
| Test, metrics, profiling, build tools | Framework/công cụ có sẵn |
| Art, animation, sound, UI, maps | Asset pack/template/source sẵn có phù hợp; chỉnh palette/rig/layout để thống nhất |
| Gameplay, AI role, mission, balance, death/drop | Team tập trung thiết kế luật riêng và tích hợp hệ thống |

Có thể lấy một repo/template/codebase phù hợp làm nền, không bắt buộc lắp từng component từ số không. Cấu trúc ARCHITECTURE mô tả trách nhiệm cần có, không yêu cầu mỗi ô trong sơ đồ phải là thư viện tự viết. Nếu giải pháp có sẵn thay đổi đáng kể tổ chức code, cập nhật kiến trúc theo thực tế.

Ghi khi nhận dependency/asset: nguồn, version/commit nếu có, phần sử dụng, lý do và local changes. Giữ license/attribution theo nguồn; dùng bản phù hợp quyền sử dụng. Pin version để tái lập build. Không copy mù đoạn code thiếu context hoặc cài một framework lớn chỉ để dùng một hàm nhỏ.

Quy tắc style áp dụng cho code dự án và adapter; giữ phong cách upstream trong third-party/fork để dễ cập nhật. Không thay tên hàng loạt API thư viện, không bọc mọi hàm chỉ để biến PascalCase thành snake_case. Nhu cầu thêm dependency phù hợp nằm trong phạm vi chủ động đã được người dùng cho phép.

## 1. Nguồn chuẩn

| Nội dung | Nguồn chuẩn |
| --- | --- |
| Mục tiêu và phạm vi | [VISION.md](VISION.md) |
| Module, dependency và ownership | [ARCHITECTURE.md](ARCHITECTURE.md) |
| Source layout, file/folder budgets và migration | [SOURCE_STRUCTURE.md](SOURCE_STRUCTURE.md) |
| Asset, animation, JSON/editor | [ASSETS.md](ASSETS.md) |
| Session/network/server | [COOP.md](COOP.md) |
| Format C++ | [.clang-format](../.clang-format) |
| Encoding/indent/endline | [.editorconfig](../.editorconfig), [.gitattributes](../.gitattributes) |
| Hướng dẫn tại root cho agent | [AGENTS.md](../AGENTS.md) |

Thông số tuning có nguồn duy nhất trong content config; protocol có một định nghĩa dùng chung client/server. Tài liệu không thay code/schema, nhưng phải cập nhật khi contract thay đổi. Ví dụ JSON trong planning chưa phải runtime content.

## 2. C++ và format

- C++17; không dùng std::span, std::format, concepts hoặc ranges yêu cầu chuẩn mới hơn.
- Bốn spaces, không tab; Allman braces như main.cpp hiện tại; giới hạn dòng 100 ký tự cho code. JSON/YAML hai spaces.
- Use UTF-8, LF and a final newline; `.bat/.cmd` use CRLF. All project-owned repository content,
  including code comments, planning, reviews and handoffs, must be in English. Vietnamese is
  reserved for direct conversation with the user; see the repository language rule in AGENTS.md.
- Luôn dùng braces cho if/else/for/while, kể cả một statement. Early return cho guard clause; tránh lồng nhiều cấp.
- `Type* pointer`, `Type& reference`, `const Type& input`. Dùng const cho dữ liệu chỉ đọc; auto khi kiểu rõ từ vế phải, không che mất đơn vị/ownership.
- `enum class` cho tập trạng thái có tên. Không dùng int/boolean vô danh để biểu diễn nhiều chế độ.
- Dùng std::uint32_t/std::uint64_t cho ID/tick/protocol width rõ ràng; std::size_t cho index/container size. Không serialize size_t hoặc raw C++ layout lên mạng.
- Value types nhỏ dùng struct và khởi tạo member; class cho owner có invariant. Không thêm getter/setter máy móc cho mọi field DTO.

clang-format đọc style từ file cấu hình; EditorConfig mô tả encoding/indent/endline cho editor hỗ trợ. [Nguồn: ClangFormat](https://clang.llvm.org/docs/ClangFormatStyleOptions.html), [EditorConfig](https://editorconfig.org/).

## 3. Đặt tên

| Loại | Quy ước | Ví dụ |
| --- | --- | --- |
| Namespace | lower_snake_case | zombie::combat, zombie::net |
| Type/enum | PascalCase | ZombieStore, AttackDefinition, DamageType |
| Interface ở boundary thật | I + PascalCase | ITransport, ILobbyService |
| Function/method | snake_case, động từ cụ thể | apply_damage, find_target, save_definition |
| Biến/parameter/public data | snake_case | target_id, frame_count, max_players |
| Private member | snake_case_ | session_id_, zombies_ |
| Constant | kPascalCase | kProtocolVersion, kInvalidSlot |
| Enum value | PascalCase | ZombieState::Chase, DamageType::Blast |
| Bool | is/has/can/should + ý nghĩa dương | is_alive, can_fire, has_pending_save |
| C++ file | PascalCase.h/.cpp | ZombieStore.h, CombatSystem.cpp |
| Entry point | main.cpp hoặc role cụ thể | main.cpp, ServerMain.cpp |
| Thư mục | lower_snake_case | combat, presentation, asset_cache |
| JSON/asset/script | snake_case | walker.json, build_assets.ps1 |
| Content ID | namespace có dấu chấm | zombie.walker, attack.player.mortar_blast |
| Test file | SubjectTests.cpp | SpatialGridTests.cpp |

Tên từ API bên ngoài như DrawTexturePro giữ nguyên. JSON field dùng snake_case; tên ID không đổi khi dời file. Không dùng Hungarian notation hoặc tên chung `data2`, `temp_manager`, `misc`, `utils` cho trách nhiệm không rõ.

Đơn vị nằm trong tên field: speed_units_per_second, radius_units, pivot_px, duration_ms, cooldown_ticks. Tick thuộc simulation clock; thời gian UI/audio/network có tên/owner riêng. Không truyền một float tên time giữa nhiều miền clock mà không rõ ý nghĩa.

## 4. Header và API

Tổ chức source/module theo [SOURCE_STRUCTURE.md](SOURCE_STRUCTURE.md). Chia theo trách nhiệm và nhóm chức năng, không gom source vào folder phẳng hoặc cắt class lớn thành file đánh số. Ngưỡng review/block, ngoại lệ vendor/generated và cách migration nằm tại đó; không tạo bộ quota khác trong module mới. Quy tắc không yêu cầu tự viết subsystem: ưu tiên library/framework có sẵn và adapter cần thiết.

- Header `.h` dùng `#pragma once`, tự include đủ thứ nó dùng. Không dựa vào thứ tự include của caller.
- File `.cpp` include header của chính nó trước; sau đó project, third-party, standard headers thành nhóm. Formatter giữ thứ tự nhóm, không tự sắp include.
- Dùng include từ root src, ví dụ `game/combat/Attack.h`; không tạo chuỗi `../../../` trong C++.
- Không `using namespace` trong header. Helper chỉ dùng trong `.cpp` đặt ở anonymous namespace; không lộ helper nội bộ thành API.
- Template nhỏ cần ở header; implementation thường để `.cpp`. Không include `.cpp` hoặc tạo umbrella header kéo toàn engine.
- API nói rõ input/output và mutation. Dùng const reference cho record lớn chỉ đọc; ID/số nhỏ truyền value. Pointer không sở hữu chỉ dùng khi có thể null hoặc lifetime được ghi rõ.
- Hàm truy vấn không âm thầm thay World; command apply có side effect trong tên. Callback async không capture reference sẽ hết lifetime.

Ví dụ phong cách, không phải class đã được triển khai:

```cpp
#pragma once

#include <cstdint>

namespace zombie::combat
{
enum class DamageType : std::uint8_t
{
    Bullet,
    Blast,
    Melee
};

struct DamageRequest
{
    std::uint32_t amount = 0;
    DamageType type = DamageType::Bullet;
};

class DamageBudget
{
public:
    [[nodiscard]] bool can_apply(std::uint32_t amount) const;
    void reset(std::uint32_t remaining);

private:
    std::uint32_t remaining_ = 0;
};
}
```

## 5. Ownership, ID và bộ nhớ

- Ưu tiên value/RAII; unique_ptr khi cần ownership động, shared_ptr chỉ khi ownership thật sự chia sẻ và không tạo cycle.
- Texture/audio có owner rõ, unload trước graphics/audio context. Raw resource handle không ngầm sở hữu tài nguyên.
- Store entity dùng slot + generation; reference/dense index chỉ hợp lệ trong khoảng không structural mutation. Deferred command buffer cho spawn/despawn, không xóa vector trong khi đang duyệt nó.
- Corpse/event giữ snapshot hoặc ID cần thiết, không giữ Zombie* sau despawn. Part/clip/atlas definition dùng chung, instance chỉ giữ selection/phase/mask.
- Reserve/pool ở load/start session theo nhu cầu đo được. Tránh allocation, parse JSON, filesystem, string lookup và texture upload trong hot loop mỗi entity.
- Không sửa container từ hai thread không có ownership/synchronization rõ. Single-thread simulation trước; worker chỉ đọc snapshot, trả kết quả để commit tại boundary.

## 6. Ranh giới module

core → không phụ thuộc gameplay; sim dùng core; game dùng core/sim/typed definitions. Server/client/renderer/editor là adapter phía ngoài. Dependency cycle phải được xử lý bằng đổi ownership hoặc một contract dữ liệu nhỏ, không bằng forward declaration để che vòng logic.

- World không biết Raylib, network transport hoặc đường dẫn JSON.
- Renderer chỉ đọc state/event; không thay damage, HP, inventory hoặc collider.
- Player/NPC/trụ dùng command/attack pipeline chung.
- Session sở hữu connection/participant/character mapping; lobby/discovery không xử lý combat.
- Content loader validate rồi tạo immutable bundle. Editor giữ draft riêng; chỉ publish qua Apply hợp lệ.
- Interface đặt tại boundary cần thay thế/test: transport, lobby, identity, clock/input adapter. Không tạo interface cho mọi class hoặc service locator chung.

Cấu trúc thư mục trong ARCHITECTURE là bản đồ trách nhiệm. Thêm file cạnh module sở hữu hành vi; không nhét business logic vào core vì muốn gọi từ nhiều nơi.

## 7. Simulation và networking

- Fixed tick do server cấp; không gọi GetFrameTime hoặc system clock từ system gameplay. RNG gameplay có seed/owner; RNG cosmetic tách riêng.
- Thứ tự system được gọi tường minh, không dựa vào thứ tự unordered_map. Snapshot version/tick có kiểu rõ và giới hạn rollover được xét.
- Client gửi ý định; server kiểm tra ownership, cooldown, ammo, placement và budget.
- Mọi one-shot operation có request/event ID: bắn theo action policy, đặt trụ, trừ tài nguyên, drop, pickup, checkpoint/respawn. Retry không tạo side effect mới.
- Serialize field-by-field, version và bounds rõ ràng; không memcpy struct lên wire, không tin count từ network để cấp phát vô hạn.
- Không hard-code bốn player hoặc giả định NPC là slot player thiếu. Số lượng lấy config, runtime vẫn có giới hạn tài nguyên được validate.
- Không nhận lại identity bằng nickname. Participant/connection/actor/character là các khái niệm khác nhau.
- Client quality không được thay đổi hitbox, damage, time hoặc số projectile có tác dụng gameplay.

## 8. Config và asset

**Quy tắc visual bắt buộc:** đọc [ASSETS.md mục 0](ASSETS.md#0-asset-thật-là-yêu-cầu-bắt-buộc) và [AGENT_NOTICE.md](AGENT_NOTICE.md). UI/weapon/props/environment/VFX phải là asset authoring + metadata, render bằng cached handles. Không ghép artwork sản phẩm bằng line/rectangle/circle trong C++, không chuyển primitive recipe sang JSON để né yêu cầu. Placeholder cũng là file asset có ID/metadata và replacement task; primitive chỉ dành cho debug/editor hoặc clear/clipping. Review phải kiểm tra asset files, nguồn/license, manifest/interface, UI skin và weapon sockets, không chỉ build/test hay kích thước source.

### Không hardcode thông số

**Chốt dùng JSON UTF-8, indent hai space, đồng nhất với inspector.** Không thêm YAML làm nguồn song song. Mọi giá trị dùng để tune gameplay, ứng dụng, mạng hoặc hiệu năng phải nằm trong config; đổi thông số không cần sửa/rebuild C++. Chuyển số sang `constexpr`, macro hoặc `Constants.h` vẫn là hardcode nếu đó là thông số có thể chỉnh.

| Thông số | Nguồn chuẩn dự kiến |
| --- | --- |
| Tên hiển thị, cửa sổ, chế độ giới hạn FPS, profile mặc định | `content/app/application.json` |
| Số player, simulation/snapshot Hz, timeout và lifecycle | `content/sessions/*.json` |
| HP, tốc độ, damage, cooldown, range, wave/spawn caps | Definition tương ứng trong `content/`, theo [ASSETS.md](ASSETS.md) |
| Pool cosmetic, audio voices, camera shake, chất lượng render | `content/quality/*.json` |
| Sprite rect, số frame, duration, pivot, socket, layer order | Metadata từ nguồn art/rig/presentation; không lặp lại trong C++ |

Mỗi setting chỉ có một owner. Attack sở hữu damage; weapon tham chiếu attack ID, không chép damage. App chọn session/quality bằng ID, không sao chép tickrate hoặc hạn mức của chúng. Giá trị mẫu là điểm bắt đầu để đo, không phải cam kết hiệu năng.

Loader dùng thư viện JSON sẵn có, validate schema và reference rồi tạo typed config/definition bất biến. Consumer nhận `const` reference hoặc snapshot có lifetime rõ; không dùng global mutable config hay string lookup/parse JSON trong vòng lặp entity. Code có thể gọi `set_target_fps(application.frame_pacing.target_fps)`; không gắn số FPS trực tiếp vào lệnh gọi. Khi mode là `uncapped`, adapter chuyển sang cơ chế bỏ giới hạn của backend; mode này không phụ thuộc một số sentinel do người dùng đoán.

Thiếu field bắt buộc hoặc sai miền phải báo file/field và dừng startup liên quan; reload lỗi giữ bundle hợp lệ trước. Default tùy chọn phải được khai báo trong config chuẩn và áp dụng tại loader, không rải fallback số trong consumer. Không dựa vào annotation `default` của JSON Schema để tự điền giá trị. V1 dùng record đầy đủ; nếu thêm user override sau này, phải xác định thứ tự ưu tiên và hiển thị effective value cùng nguồn trong inspector.

| Loại thay đổi | Thời điểm áp dụng |
| --- | --- |
| Tickrate, snapshot rate, lobby capacity, transport/lifecycle | Khi tạo session mới; không đổi giữa trận |
| Gameplay definitions | Host dev có quyền, tại preparation/restart preview và ranh giới tick; đồng bộ revision/hash |
| Quality, animation/atlas và cấu hình hiển thị hỗ trợ reload | Ranh giới frame an toàn; resource cũ tồn tại tới khi consumer dùng xong |
| Thiết lập startup chưa hỗ trợ reload | Save rồi khởi động lại; inspector phải ghi rõ |

Action đang thực hiện giữ snapshot cũ tới khi xong; sửa config không tự hồi HP hay thay kết quả một hit đang xử lý. Render FPS độc lập simulation Hz. `_ticks` quy đổi bằng tickrate của session; đổi tickrate cần kiểm chứng lại timing và balance của content.

Các giá trị mang nghĩa cấu trúc như phần tử đầu tiên, zero initialization, enum, bit layout và version protocol/schema là contract trong code, không biến tất cả literal thành config. `kPascalCase` chỉ đặt tên hằng số thuộc loại này; `kWalkerHealth` hoặc `kMaxPlayers` để tune là không hợp lệ. Giới hạn an toàn cấu trúc của protocol được validate cùng config, không thể tùy ý nâng bằng sửa JSON.

Mẫu app: [application.example.json](examples/assets/application.example.json). `frame_pacing.mode` nhận `uncapped` hoặc `capped`; `target_fps` là số nguyên dương chỉ dùng khi `capped`, còn `vsync` có thể giới hạn tốc độ theo màn hình. Đây là contract thiết kế; loader/schema production chưa được triển khai. Khi đưa shell/preview hiện tại vào G0–G2, chuyển tên cửa sổ/window/FPS sang app config và đọc frame/pivot/timing từ metadata thay cho hằng số trong tool.

### Đổi tên game ở một nơi

Nguồn runtime duy nhất là [content/app/application.json](../content/app/application.json), field `display_name`. `content::load_application` đọc một lần trước khi mở cửa sổ, validate và truyền typed config vào app/presentation. Tiêu đề cửa sổ và HUD dùng cùng giá trị; không có tên dự phòng hardcode. Config thiếu/sai phải báo path/field rồi dừng startup, không âm thầm dùng tên cũ.

- **Branding:** `display_name` được đổi tự do, không cần build lại C++. Các màn hình menu/lobby/credits thêm sau phải nhận cùng metadata này; không tự đặt bản sao tên game.
- **Identity ổn định:** `id` nhận diện record config, không đổi theo tên hiển thị. Save/profile directory, content IDs, protocol ID/version và Steam app ID sau này có identity riêng; không suy ra từ tên game, tên `.exe` hoặc thư mục workspace. Branding không tham gia gameplay hash hay quyết định kết nối tương thích.
- **Code/build:** `zombie::*`, `zombie_demo`, `zombie_*` là định danh kỹ thuật ổn định, không phải branding. Không cần rename chúng để đổi tên game. C++ symbol và CMake target không phải setting runtime có thể đọc từ JSON.
- **Packaging về sau:** package tool đọc app metadata để đặt tên shortcut/installer và product metadata. Nếu cần đổi tên `.exe`/archive, thêm `package_name` riêng vào cùng config và validate tên file; tool đóng gói đổi tên bản phân phối, không đổi target nguồn. Windows embedded version/icon cần đóng gói/build lại. Pipeline packaging này chưa triển khai.
- **Localization về sau:** font/fallback và chuỗi theo locale thuộc presentation. Cửa sổ nhận tên UTF-8; HUD hiện dùng font mặc định Raylib và giới hạn vùng vẽ để tên dài không đè chỉ số. Font đủ glyph tiếng Việt và bố cục title dài cần hoàn thiện trước phát hành.

Dev sửa file nguồn rồi chạy exe với `--app-config content/app/application.json` từ root; đọc lại khi mở app. Bản đóng gói sửa `assets/app/application.json` cạnh exe rồi mở lại. Build hiện tại copy file nguồn vào gói; sửa riêng bản copy sẽ bị ghi đè ở lần build sau. Không tìm config bằng cách suy ra tên game; đường dẫn bootstrap tương đối với exe hoặc CLI tường minh.

Runtime hiện hỗ trợ `schema_version`, `id`, `display_name`, `window`, `frame_pacing` qua `content::load_application` trong [ApplicationLoader.h](../src/content/application/ApplicationLoader.h). Gameplay, quality và sprite có header loader riêng; không include tất cả từ một DemoLoader chung. [Ví dụ app mở rộng](examples/assets/application.example.json) còn có `profiles` dự kiến, chưa được loader runtime chấp nhận. Không copy nguyên ví dụ mở rộng vào runtime trước khi cập nhật contract/loader tương ứng.

### Validation và nguồn asset

- JSON schema_version bắt buộc; field không biết, ID trùng, giá trị sai miền hoặc reference thiếu phải báo lỗi rõ.
- Thêm field contract phải cập nhật schema, loader, defaults/migration được hỗ trợ, sample và consumer liên quan.
- Gameplay config thuộc server; config visual cá nhân không thay kết quả. Save editor ghi authoring JSON atomically và phát hiện sửa ngoài bằng baseline hash.
- Asset nguồn có palette/pivot/rig/layout chuẩn; generated atlas/metadata chỉ được tạo qua tool. Không sửa atlas bằng tay rồi bỏ source cũ.
- Tên ID ổn định; bitmap/frame order trong atlas không phải identity. Không hard-code tọa độ sprite trong logic zombie.
- Clip dùng chung timeline cho các part, faction/action timing độc lập frame vẽ. Marker cosmetic không phát damage.
- Giới hạn pool giảm hiệu ứng trang trí; không dùng overflow policy của particle cho gameplay projectile/death/drop.

## 9. Lỗi, log và comment

- Input/file/network không hợp lệ là tình huống runtime: trả lỗi có context, giữ bundle hợp lệ trước. Assert chỉ cho invariant nội bộ; không dùng assert thay validation đầu vào.
- Không dùng exception làm control flow trong tick. Exception từ thư viện ở boundary load/save/startup phải được đổi thành lỗi có nghĩa; không catch rồi bỏ qua hoặc tiếp tục với World nửa cập nhật.
- API có thể thất bại trả bool/error record cụ thể hoặc optional khi thiếu là bình thường. Không dựng framework Result tổng quát trước khi cần.
- Log lỗi với asset ID/path/field, session/tick/request ID khi hữu ích. Rate-limit lỗi lặp; không log mỗi zombie mỗi tick, không log token reconnect.
- Comment giải thích lý do, invariant, tradeoff; không diễn giải lại tên hàm. TODO ghi việc cụ thể và điều kiện giải quyết, không để `TODO: optimize` chung chung.
- Không che warning bằng global disable. Giữ MSVC /W4 /permissive- cho code dự án; xử lý warning đúng nguyên nhân.

## 10. Build, dependency và format

Build hiện tại từ root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\build.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File .\build.ps1 -Configuration Release
```

CMake source list tường minh, dependency theo target, include directories có scope. Không thêm global include/compile flags để chữa một module. Pin dependency bằng version/commit/hash phù hợp C++17 và nền tảng; ghi lý do/ngân sách tác động khi thêm thư viện.

Format file vừa sửa bằng clang-format dùng `.clang-format`; nếu đã có trên PATH:

```powershell
clang-format --style=file -i src/main.cpp
clang-format --style=file --dry-run --Werror src/main.cpp
```

Đường dẫn trên chỉ minh họa; thay bằng file C++ thuộc thay đổi của mình. Có thể dùng formatter đi kèm Visual Studio, không cần cài compiler mới. EditorConfig/clang-format cần editor/tool hỗ trợ; file cấu hình không tự cài extension.

Đồng bộ version formatter trong team/CI khi dựng pipeline. Không format build/_deps hoặc vendor. Không build/test target trong tài liệu nếu target đó chưa tồn tại.

## 11. Test, performance và review

Test tập trung vào contract có rủi ro: query vs brute-force, collision, hit window, handle tái sử dụng, map revision, schema/ID, duplicate network command, death/drop/rejoin và inspector save conflict. Không viết test chỉ phản chiếu getter/setter hoặc tạo framework test trước core.

Thay đổi gameplay phải có scene/manual steps hoặc test phù hợp. Thay protocol/content cần tương thích/version checks. Thay performance phải đo Release cùng hardware/seed/scene, ghi p50/p95/p99, không chỉ cảm giác hoặc FPS trung bình. Render CPU, GPU và server tick là số đo khác nhau.

Một thay đổi sẵn sàng review khi:

- Giải quyết một hành vi cụ thể, đúng module và ownership.
- Format đạt, build/check liên quan đạt hoặc nêu rõ phần chưa chạy.
- Test meaningful cho lỗi có rủi ro; content references/version nhất quán.
- Không đụng file ngoài scope hoặc generated nguồn không đúng quy trình.
- Có mô tả trước/sau, cách kiểm chứng và giới hạn còn lại.

## 12. Cách team và AI agent phối hợp

Theo [WORKFLOW.md](WORKFLOW.md) cho Ready/Done, grooming và integration ownership. Task/bug/TODO/debt nằm trong [BACKLOG.md](BACKLOG.md); thay đổi đã tích hợp cập nhật [CHANGELOG.md](CHANGELOG.md). Pattern và khoảng cách giữa source với thiết kế xem [ARCHITECTURE.md](ARCHITECTURE.md), không tự thêm framework hoặc mặc định mọi feature đã theo kiến trúc chỉ vì có tài liệu.

Trước khi code, xác định owner file/module, contract input/output và acceptance criteria ngắn. Một người/agent chịu trách nhiệm tích hợp protocol/schema/rig changes; agent khác không tự tạo cùng ID theo định nghĩa khác.

Task nhỏ theo lát chức năng có thể chạy/kiểm tra: ví dụ một hit xuyên client → server → damage event → feedback; không chia chỉ thành nhiều skeleton không tích hợp. Không sinh class/thư mục rỗng hàng loạt để chứng minh có architecture.

Khi dùng Git: branch theo task, commit nhỏ có mục đích, ví dụ `feat(combat): resolve blast damage once per target`. PR mô tả hành vi và validation, không kể lịch sử hội thoại. Không ghi đè thay đổi của người khác; phối hợp trước khi thay contract chung và ghi vào DECISIONS.

Handoff ghi: đã đổi gì, file sở hữu, contract/version thay đổi, check đã chạy và việc còn lại. Không nói tính năng/server/benchmark đã hoàn thành khi mới viết tài liệu hoặc JSON mẫu.
