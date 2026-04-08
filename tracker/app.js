/* ============================================
   Java Backend Roadmap Tracker — App Logic
   ============================================ */

// ── Roadmap Data ──────────────────────────────
const ROADMAP = [
    {
        id: "phase-1",
        phase: 1,
        title: "Java Core Cơ Bản",
        icon: "☕",
        duration: "4-5 tuần",
        level: "Beginner",
        color: "#10b981",
        sections: [
            {
                title: "Tuần 1-2: Nền Tảng Lập Trình Java",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "1-1-1", text: "<strong>Cài đặt môi trường</strong>: JDK 17/21 (LTS), IntelliJ IDEA Community" },
                    { id: "1-1-2", text: "<strong>Cú pháp cơ bản</strong>: biến, kiểu dữ liệu (primitive vs reference), toán tử" },
                    { id: "1-1-3", text: "<strong>Cấu trúc điều khiển</strong>: <code>if/else</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>do-while</code>, <code>for-each</code>" },
                    { id: "1-1-4", text: "<strong>Mảng</strong> (Array): khai báo, duyệt, sắp xếp, tìm kiếm" },
                    { id: "1-1-5", text: "<strong>Chuỗi</strong> (String): <code>String</code>, <code>StringBuilder</code>, <code>StringBuffer</code>, các method phổ biến" },
                    { id: "1-1-6", text: "<strong>Phương thức</strong> (Method): khai báo, tham số, return, overloading" },
                    { id: "1-1-7", text: "<strong>Nhập/xuất cơ bản</strong>: <code>Scanner</code>, <code>System.out</code>" }
                ]
            },
            {
                title: "Tuần 1-2: Thực Hành",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "1-2-1", text: "Giải 20+ bài tập thuật toán cơ bản (số nguyên tố, Fibonacci, đảo chuỗi...)" },
                    { id: "1-2-2", text: "Viết chương trình máy tính đơn giản (Calculator Console App)" },
                    { id: "1-2-3", text: "Làm bài tập trên HackerRank - Java" }
                ]
            },
            {
                title: "Tuần 3-4: Lập Trình Hướng Đối Tượng (OOP)",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "1-3-1", text: "<strong>Class & Object</strong>: thuộc tính, phương thức, constructor, <code>this</code>" },
                    { id: "1-3-2", text: "<strong>Encapsulation</strong>: access modifiers (<code>private</code>, <code>protected</code>, <code>public</code>, <code>default</code>), getter/setter" },
                    { id: "1-3-3", text: "<strong>Inheritance</strong>: <code>extends</code>, <code>super</code>, constructor chaining" },
                    { id: "1-3-4", text: "<strong>Polymorphism</strong>: method overriding, method overloading, upcasting/downcasting" },
                    { id: "1-3-5", text: "<strong>Abstraction</strong>: <code>abstract class</code>, <code>interface</code>, khi nào dùng cái nào" },
                    { id: "1-3-6", text: "<strong>Các keyword quan trọng</strong>: <code>static</code>, <code>final</code>, <code>instanceof</code>" },
                    { id: "1-3-7", text: "<strong>Enum</strong>: khai báo, sử dụng trong thực tế" },
                    { id: "1-3-8", text: "<strong>Inner class</strong>: static nested class, anonymous class" }
                ]
            },
            {
                title: "Tuần 3-4: Thực Hành OOP",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "1-4-1", text: "Thiết kế hệ thống quản lý thư viện (Library Management) dùng OOP" },
                    { id: "1-4-2", text: "Vẽ UML Class Diagram cho các bài tập" }
                ]
            },
            {
                title: "Tuần 5: Exception Handling & Debugging",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "1-5-1", text: "<strong>Exception hierarchy</strong>: <code>Throwable</code> → <code>Exception</code> / <code>Error</code>" },
                    { id: "1-5-2", text: "<strong>Checked vs Unchecked Exception</strong>" },
                    { id: "1-5-3", text: "<strong>try-catch-finally</strong>, <strong>try-with-resources</strong>" },
                    { id: "1-5-4", text: "<strong>Tự tạo Custom Exception</strong>" },
                    { id: "1-5-5", text: "<strong>Debugging với IntelliJ</strong>: breakpoint, step over, step into, watch variables" }
                ]
            },
            {
                title: "Tuần 5: Thực Hành",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "1-6-1", text: "Refactor bài Library Management thêm Exception handling" },
                    { id: "1-6-2", text: "Debug và sửa 10 bài code có bug cho trước" }
                ]
            }
        ]
    },
    {
        id: "phase-2",
        phase: 2,
        title: "Java Core Nâng Cao",
        icon: "🔥",
        duration: "3-4 tuần",
        level: "Intermediate",
        color: "#f59e0b",
        sections: [
            {
                title: "Tuần 6-7: Collections Framework & Generics",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "2-1-1", text: "<strong>List</strong>: <code>ArrayList</code>, <code>LinkedList</code> — khác biệt & khi nào dùng" },
                    { id: "2-1-2", text: "<strong>Set</strong>: <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code>" },
                    { id: "2-1-3", text: "<strong>Map</strong>: <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code>, <code>Hashtable</code>" },
                    { id: "2-1-4", text: "<strong>Queue & Deque</strong>: <code>PriorityQueue</code>, <code>ArrayDeque</code>" },
                    { id: "2-1-5", text: "<strong>Iterator & ListIterator</strong>: duyệt collection" },
                    { id: "2-1-6", text: "<strong>Comparable vs Comparator</strong>: sắp xếp tùy chỉnh" },
                    { id: "2-1-7", text: "<strong>Generics</strong>: khai báo generic class, method, wildcard (<code>? extends</code>, <code>? super</code>)" },
                    { id: "2-1-8", text: "<strong>Collections utility class</strong>: <code>sort()</code>, <code>reverse()</code>, <code>unmodifiableList()</code>" }
                ]
            },
            {
                title: "Tuần 6-7: Thực Hành Collections",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "2-2-1", text: "Xây dựng <strong>PhoneBook App</strong> (Console) sử dụng <code>HashMap</code> + <code>ArrayList</code>" },
                    { id: "2-2-2", text: "Implement một <code>CustomArrayList&lt;T&gt;</code> đơn giản" },
                    { id: "2-2-3", text: "So sánh performance giữa <code>ArrayList</code> vs <code>LinkedList</code> với 1 triệu phần tử" }
                ]
            },
            {
                title: "Tuần 8: Java 8+ Features",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "2-3-1", text: "<strong>Lambda Expression</strong>: syntax, functional interface" },
                    { id: "2-3-2", text: "<strong>Method Reference</strong>: <code>::</code> operator" },
                    { id: "2-3-3", text: "<strong>Functional Interfaces</strong>: <code>Predicate</code>, <code>Function</code>, <code>Consumer</code>, <code>Supplier</code>" },
                    { id: "2-3-4", text: "<strong>Stream API</strong>: <code>filter()</code>, <code>map()</code>, <code>flatMap()</code>, <code>reduce()</code>, <code>collect()</code>" },
                    { id: "2-3-5", text: "<strong>Optional</strong>: xử lý null an toàn" },
                    { id: "2-3-6", text: "<strong>Date/Time API</strong>: <code>LocalDate</code>, <code>LocalDateTime</code>, <code>ZonedDateTime</code>" },
                    { id: "2-3-7", text: "<strong>var</strong> keyword (Java 10+)" },
                    { id: "2-3-8", text: "<strong>Record</strong> (Java 14+), <strong>Sealed Classes</strong> (Java 17+), <strong>Pattern Matching</strong>" }
                ]
            },
            {
                title: "Tuần 8: Thực Hành Stream API",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "2-4-1", text: "Refactor PhoneBook App sử dụng Stream API" },
                    { id: "2-4-2", text: "Xây dựng <strong>Student Grade Analyzer</strong> xử lý dữ liệu bằng Stream" },
                    { id: "2-4-3", text: "Viết 15+ bài tập Stream API (filter, group by, statistics...)" }
                ]
            },
            {
                title: "Tuần 9: I/O, Serialization & Multithreading",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "2-5-1", text: "<strong>File I/O</strong>: <code>File</code>, <code>FileReader</code>, <code>BufferedReader</code>, <code>BufferedWriter</code>" },
                    { id: "2-5-2", text: "<strong>NIO.2</strong>: <code>Path</code>, <code>Files</code>, <code>Paths</code> — API hiện đại" },
                    { id: "2-5-3", text: "<strong>Serialization</strong>: <code>Serializable</code>, <code>ObjectInputStream</code>, <code>ObjectOutputStream</code>" },
                    { id: "2-5-4", text: "<strong>JSON processing</strong>: sử dụng thư viện <code>Gson</code> hoặc <code>Jackson</code>" },
                    { id: "2-5-5", text: "<strong>Multithreading</strong>: <code>Thread</code>, <code>Runnable</code>, <code>synchronized</code>, <code>volatile</code>" },
                    { id: "2-5-6", text: "<strong>ExecutorService & Thread Pool</strong>: <code>Executors.newFixedThreadPool()</code>" },
                    { id: "2-5-7", text: "<strong>CompletableFuture</strong>: xử lý bất đồng bộ" }
                ]
            },
            {
                title: "Tuần 9: Thực Hành I/O",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "2-6-1", text: "Xây dựng <strong>File-based Todo App</strong> đọc/ghi file JSON" },
                    { id: "2-6-2", text: "Viết chương trình download nhiều file đồng thời bằng <code>ExecutorService</code>" }
                ]
            }
        ]
    },
    {
        id: "phase-3",
        phase: 3,
        title: "Database & SQL",
        icon: "🗄️",
        duration: "2-3 tuần",
        level: "Intermediate",
        color: "#3b82f6",
        sections: [
            {
                title: "Tuần 10: SQL Fundamentals",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "3-1-1", text: "<strong>Cài đặt</strong>: MySQL 8.x hoặc PostgreSQL 15+" },
                    { id: "3-1-2", text: "<strong>SQL cơ bản</strong>: <code>CREATE</code>, <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>" },
                    { id: "3-1-3", text: "<strong>Filtering & Sorting</strong>: <code>WHERE</code>, <code>ORDER BY</code>, <code>LIMIT</code>, <code>OFFSET</code>" },
                    { id: "3-1-4", text: "<strong>Functions</strong>: <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>GROUP BY</code>, <code>HAVING</code>" },
                    { id: "3-1-5", text: "<strong>JOIN</strong>: <code>INNER</code>, <code>LEFT</code>, <code>RIGHT</code>, <code>FULL</code>, <code>CROSS JOIN</code>" },
                    { id: "3-1-6", text: "<strong>Subquery</strong>: inline subquery, correlated subquery" },
                    { id: "3-1-7", text: "<strong>Thiết kế Database</strong>: normalization (1NF, 2NF, 3NF), ERD" },
                    { id: "3-1-8", text: "<strong>Index</strong>: tạo index, clustered vs non-clustered" },
                    { id: "3-1-9", text: "<strong>Constraints</strong>: <code>PRIMARY KEY</code>, <code>FOREIGN KEY</code>, <code>UNIQUE</code>, <code>NOT NULL</code>" }
                ]
            },
            {
                title: "Tuần 10: Thực Hành SQL",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "3-2-1", text: "Thiết kế database cho hệ thống E-commerce (ERD)" },
                    { id: "3-2-2", text: "Viết 30+ câu query từ dễ đến khó" },
                    { id: "3-2-3", text: "Luyện SQL trên SQLZoo hoặc LeetCode SQL" }
                ]
            },
            {
                title: "Tuần 11-12: JDBC & Database Connectivity",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "3-3-1", text: "<strong>JDBC Architecture</strong>: <code>DriverManager</code>, <code>Connection</code>, <code>Statement</code>, <code>ResultSet</code>" },
                    { id: "3-3-2", text: "<strong>PreparedStatement</strong>: tránh SQL Injection" },
                    { id: "3-3-3", text: "<strong>CallableStatement</strong>: gọi stored procedure" },
                    { id: "3-3-4", text: "<strong>Transaction Management</strong>: <code>commit()</code>, <code>rollback()</code>, <code>setAutoCommit(false)</code>" },
                    { id: "3-3-5", text: "<strong>Connection Pooling</strong>: HikariCP" },
                    { id: "3-3-6", text: "<strong>DAO Pattern</strong> (Data Access Object): tách biệt logic truy cập dữ liệu" },
                    { id: "3-3-7", text: "<strong>Repository Pattern</strong>: abstraction layer trên DAO" }
                ]
            },
            {
                title: "Tuần 11-12: Thực Hành JDBC",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "3-4-1", text: "Refactor Mini Project 1 → lưu dữ liệu vào MySQL thay vì file JSON" },
                    { id: "3-4-2", text: "Implement DAO pattern cho CRUD Student" }
                ]
            }
        ]
    },
    {
        id: "phase-4",
        phase: 4,
        title: "Web Fundamentals",
        icon: "🌐",
        duration: "2 tuần",
        level: "Intermediate",
        color: "#8b5cf6",
        sections: [
            {
                title: "Tuần 13: HTTP & Networking",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "4-1-1", text: "<strong>HTTP Protocol</strong>: request/response cycle, status codes (2xx, 3xx, 4xx, 5xx)" },
                    { id: "4-1-2", text: "<strong>HTTP Methods</strong>: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>" },
                    { id: "4-1-3", text: "<strong>Headers</strong>: <code>Content-Type</code>, <code>Authorization</code>, <code>Accept</code>, <code>Cookie</code>" },
                    { id: "4-1-4", text: "<strong>REST Architecture</strong>: 6 constraints, resource naming, HATEOAS" },
                    { id: "4-1-5", text: "<strong>JSON & XML</strong>: format dữ liệu cho API" },
                    { id: "4-1-6", text: "<strong>Postman / Insomnia</strong>: test API thủ công" },
                    { id: "4-1-7", text: "<strong>cURL</strong>: gọi API từ terminal" }
                ]
            },
            {
                title: "Tuần 13: Thực Hành HTTP",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "4-2-1", text: "Sử dụng Postman gọi thử các public API (JSONPlaceholder, PokeAPI)" },
                    { id: "4-2-2", text: "Phân tích request/response bằng Chrome DevTools" }
                ]
            },
            {
                title: "Tuần 14: Servlet, JSP & Build Tools",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "4-3-1", text: "<strong>Servlet lifecycle</strong>: <code>init()</code>, <code>service()</code>, <code>destroy()</code>" },
                    { id: "4-3-2", text: "<strong>HttpServlet</strong>: <code>doGet()</code>, <code>doPost()</code>" },
                    { id: "4-3-3", text: "<strong>Request/Response objects</strong>: <code>HttpServletRequest</code>, <code>HttpServletResponse</code>" },
                    { id: "4-3-4", text: "<strong>Session & Cookie</strong>: quản lý trạng thái người dùng" },
                    { id: "4-3-5", text: "<strong>Filter & Listener</strong>: middleware concept" },
                    { id: "4-3-6", text: "<strong>JSP basics</strong>: expression, scriptlet, directive" },
                    { id: "4-3-7", text: "<strong>Maven</strong>: <code>pom.xml</code>, dependency management, lifecycle" },
                    { id: "4-3-8", text: "<strong>Gradle</strong>: <code>build.gradle</code>, so sánh với Maven" }
                ]
            },
            {
                title: "Tuần 14: Thực Hành Servlet",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "4-4-1", text: "Tạo một Servlet đơn giản xử lý form login" },
                    { id: "4-4-2", text: "Tạo project Maven/Gradle đầu tiên" }
                ]
            }
        ]
    },
    {
        id: "phase-5",
        phase: 5,
        title: "Spring Framework & Spring Boot",
        icon: "🌱",
        duration: "5-6 tuần",
        level: "Advanced",
        color: "#ef4444",
        sections: [
            {
                title: "Tuần 15-16: Spring Core & Boot Basics",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "5-1-1", text: "<strong>IoC & DI</strong>: Inversion of Control, Dependency Injection" },
                    { id: "5-1-2", text: "<strong>Annotations</strong>: <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>" },
                    { id: "5-1-3", text: "<strong>Wiring</strong>: <code>@Autowired</code>, <code>@Qualifier</code>, <code>@Primary</code>" },
                    { id: "5-1-4", text: "<strong>Bean</strong>: lifecycle, scope (<code>singleton</code>, <code>prototype</code>, <code>request</code>, <code>session</code>)" },
                    { id: "5-1-5", text: "<strong>Configuration</strong>: <code>@Configuration</code>, <code>@Bean</code>, Application Context" },
                    { id: "5-1-6", text: "<strong>Spring Initializr</strong>: start.spring.io" },
                    { id: "5-1-7", text: "<strong>Config</strong>: <code>application.properties</code> / <code>application.yml</code>" },
                    { id: "5-1-8", text: "<strong>Auto-configuration</strong>: hiểu cơ chế tự cấu hình" },
                    { id: "5-1-9", text: "<strong>Profiles</strong>: <code>dev</code>, <code>test</code>, <code>prod</code> + DevTools hot reload" },
                    { id: "5-1-10", text: "<strong>Lombok</strong>: <code>@Data</code>, <code>@Builder</code>, <code>@Slf4j</code>" }
                ]
            },
            {
                title: "Tuần 15-16: Thực Hành Spring Basics",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "5-2-1", text: "Khởi tạo project Spring Boot đầu tiên từ start.spring.io" },
                    { id: "5-2-2", text: "Tạo REST API đơn giản \"Hello World\"" },
                    { id: "5-2-3", text: "Hiểu flow: Controller → Service → Repository" }
                ]
            },
            {
                title: "Tuần 17-18: Spring Data JPA & REST API",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "5-3-1", text: "<strong>JPA Entities</strong>: <code>@Entity</code>, <code>@Table</code>, <code>@Id</code>, <code>@GeneratedValue</code>" },
                    { id: "5-3-2", text: "<strong>Relationships</strong>: <code>@OneToOne</code>, <code>@OneToMany</code>, <code>@ManyToOne</code>, <code>@ManyToMany</code>" },
                    { id: "5-3-3", text: "<strong>Fetch type</strong>: <code>LAZY</code> vs <code>EAGER</code> — N+1 problem" },
                    { id: "5-3-4", text: "<strong>Cascade types</strong>: <code>ALL</code>, <code>PERSIST</code>, <code>MERGE</code>, <code>REMOVE</code>" },
                    { id: "5-3-5", text: "<strong>Spring Data JPA</strong>: <code>JpaRepository</code>, query methods, <code>@Query</code>" },
                    { id: "5-3-6", text: "<strong>Pagination & Sorting</strong>: <code>Pageable</code>, <code>Page&lt;T&gt;</code>, <code>Sort</code>" },
                    { id: "5-3-7", text: "<strong>DTO Pattern & MapStruct</strong>: mapping Entity ↔ DTO" },
                    { id: "5-3-8", text: "<strong>Validation</strong>: <code>@Valid</code>, <code>@NotNull</code>, <code>@Size</code>, <code>@Email</code>" },
                    { id: "5-3-9", text: "<strong>Global Exception Handling</strong>: <code>@RestControllerAdvice</code>, <code>@ExceptionHandler</code>" }
                ]
            },
            {
                title: "Tuần 17-18: Thực Hành — Blog API",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "5-4-1", text: "Xây dựng <strong>Blog API</strong>: CRUD Posts, Comments, Categories" },
                    { id: "5-4-2", text: "Thêm Pagination & Search cho Blog API" },
                    { id: "5-4-3", text: "Implement Validation & Error Handling" },
                    { id: "5-4-4", text: "Implement DTO mapping với MapStruct" }
                ]
            },
            {
                title: "Tuần 19-20: Tính Năng Nâng Cao",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "5-5-1", text: "<strong>Flyway / Liquibase</strong>: database migration & version control" },
                    { id: "5-5-2", text: "<strong>Caching</strong>: <code>@Cacheable</code>, <code>@CacheEvict</code> + Redis" },
                    { id: "5-5-3", text: "<strong>File Upload/Download</strong>: <code>MultipartFile</code>" },
                    { id: "5-5-4", text: "<strong>Email Service</strong>: <code>JavaMailSender</code>, template email" },
                    { id: "5-5-5", text: "<strong>Scheduling</strong>: <code>@Scheduled</code>, <code>@Async</code>" },
                    { id: "5-5-6", text: "<strong>Swagger/OpenAPI</strong>: <code>springdoc-openapi</code>" },
                    { id: "5-5-7", text: "<strong>Logging</strong>: SLF4J + Logback, log levels, MDC" },
                    { id: "5-5-8", text: "<strong>Actuator</strong>: health check, metrics, monitoring" },
                    { id: "5-5-9", text: "<strong>CORS Configuration</strong>: <code>@CrossOrigin</code>, global config" }
                ]
            },
            {
                title: "Tuần 19-20: Thực Hành Nâng Cao",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "5-6-1", text: "Thêm Swagger vào Blog API" },
                    { id: "5-6-2", text: "Implement file upload cho blog post (ảnh đại diện)" },
                    { id: "5-6-3", text: "Thêm caching cho API GET" }
                ]
            }
        ]
    },
    {
        id: "phase-6",
        phase: 6,
        title: "Security, Auth & Testing",
        icon: "🔐",
        duration: "3 tuần",
        level: "Advanced",
        color: "#06b6d4",
        sections: [
            {
                title: "Tuần 21-22: Spring Security & JWT",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "6-1-1", text: "<strong>SecurityFilterChain</strong> configuration" },
                    { id: "6-1-2", text: "<strong>Authentication vs Authorization</strong>" },
                    { id: "6-1-3", text: "<strong>UserDetailsService</strong>, <code>PasswordEncoder</code> (BCrypt)" },
                    { id: "6-1-4", text: "<strong>JWT structure</strong>: Header.Payload.Signature" },
                    { id: "6-1-5", text: "<strong>Access Token & Refresh Token</strong>: generation, validation, expiration" },
                    { id: "6-1-6", text: "<strong>OAuth2 & Social Login</strong> (tùy chọn): Google, GitHub" },
                    { id: "6-1-7", text: "<strong>RBAC</strong>: <code>@PreAuthorize</code>, <code>@PostAuthorize</code>, <code>@Secured</code>" },
                    { id: "6-1-8", text: "<strong>CORS + CSRF</strong>: hiểu và cấu hình đúng" },
                    { id: "6-1-9", text: "<strong>Rate Limiting</strong>: Bucket4j hoặc tự implement" }
                ]
            },
            {
                title: "Tuần 21-22: Thực Hành Security",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "6-2-1", text: "Implement Auth flow: Register, Login, Refresh Token" },
                    { id: "6-2-2", text: "Implement RBAC: ADMIN, USER, MODERATOR" },
                    { id: "6-2-3", text: "Bảo vệ endpoints theo role cho Blog API" }
                ]
            },
            {
                title: "Tuần 23: Testing",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "6-3-1", text: "<strong>JUnit 5</strong>: <code>@Test</code>, <code>@BeforeEach</code>, <code>@ParameterizedTest</code>" },
                    { id: "6-3-2", text: "<strong>Mockito</strong>: <code>@Mock</code>, <code>@InjectMocks</code>, <code>when().thenReturn()</code>" },
                    { id: "6-3-3", text: "<strong>Integration Testing</strong>: <code>@SpringBootTest</code>, <code>@WebMvcTest</code>, <code>@DataJpaTest</code>" },
                    { id: "6-3-4", text: "<strong>TestContainers</strong>: test với database thật (Docker container)" },
                    { id: "6-3-5", text: "<strong>MockMvc</strong>: test REST API endpoints" },
                    { id: "6-3-6", text: "<strong>Test Coverage</strong>: JaCoCo plugin" },
                    { id: "6-3-7", text: "<strong>TDD mindset</strong>: viết test trước, implement sau" }
                ]
            },
            {
                title: "Tuần 23: Thực Hành Testing",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "6-4-1", text: "Viết unit test cho Service layer (≥80% coverage)" },
                    { id: "6-4-2", text: "Viết integration test cho Controller layer" },
                    { id: "6-4-3", text: "Viết repository test với <code>@DataJpaTest</code>" }
                ]
            }
        ]
    },
    {
        id: "phase-7",
        phase: 7,
        title: "Microservices & DevOps",
        icon: "🐳",
        duration: "4-5 tuần",
        level: "Advanced",
        color: "#64748b",
        sections: [
            {
                title: "Tuần 24-25: Docker & Containerization",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "7-1-1", text: "<strong>Docker cơ bản</strong>: image, container, <code>Dockerfile</code>, <code>docker-compose.yml</code>" },
                    { id: "7-1-2", text: "<strong>Dockerfile cho Spring Boot</strong>: multi-stage build" },
                    { id: "7-1-3", text: "<strong>Docker Compose</strong>: chạy app + MySQL + Redis cùng lúc" },
                    { id: "7-1-4", text: "<strong>Docker networking</strong>: bridge, host, custom network" },
                    { id: "7-1-5", text: "<strong>Volume</strong>: persist data cho database" }
                ]
            },
            {
                title: "Tuần 24-25: Thực Hành Docker",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "7-2-1", text: "Dockerize E-Commerce API" },
                    { id: "7-2-2", text: "Viết <code>docker-compose.yml</code> chạy toàn bộ stack" },
                    { id: "7-2-3", text: "Push image lên Docker Hub" }
                ]
            },
            {
                title: "Tuần 26-27: Microservices Architecture",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "7-3-1", text: "<strong>Microservices vs Monolith</strong>: pros/cons, khi nào nên dùng" },
                    { id: "7-3-2", text: "<strong>API Gateway</strong>: Spring Cloud Gateway" },
                    { id: "7-3-3", text: "<strong>Service Discovery</strong>: Eureka / Consul" },
                    { id: "7-3-4", text: "<strong>Config Server</strong>: centralized configuration" },
                    { id: "7-3-5", text: "<strong>Circuit Breaker</strong>: Resilience4j" },
                    { id: "7-3-6", text: "<strong>Inter-Service Communication</strong>: OpenFeign, gRPC, RabbitMQ, Kafka" },
                    { id: "7-3-7", text: "<strong>Event-Driven Architecture</strong>: pub/sub pattern" },
                    { id: "7-3-8", text: "<strong>Distributed Tracing</strong>: Zipkin, Micrometer" },
                    { id: "7-3-9", text: "<strong>Centralized Logging</strong>: ELK Stack" }
                ]
            },
            {
                title: "Tuần 26-27: Thực Hành Microservices",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "7-4-1", text: "Tách E-Commerce monolith thành microservices" },
                    { id: "7-4-2", text: "Implement <code>user-service</code>, <code>product-service</code>, <code>order-service</code>" },
                    { id: "7-4-3", text: "Implement <code>api-gateway</code> + <code>notification-service</code>" },
                    { id: "7-4-4", text: "Implement communication bằng OpenFeign + RabbitMQ" }
                ]
            },
            {
                title: "Tuần 28: CI/CD & Deployment",
                icon: "📅",
                type: "knowledge",
                tasks: [
                    { id: "7-5-1", text: "<strong>Git workflow</strong>: Git Flow, feature branches, conventional commits" },
                    { id: "7-5-2", text: "<strong>CI/CD</strong>: GitHub Actions — Build → Test → Docker Build → Deploy" },
                    { id: "7-5-3", text: "<strong>Cloud Deployment</strong>: AWS (EC2, RDS, S3) hoặc Railway/Render" },
                    { id: "7-5-4", text: "<strong>Nginx</strong>: reverse proxy, load balancing" },
                    { id: "7-5-5", text: "<strong>SSL/TLS</strong>: HTTPS với Let's Encrypt" },
                    { id: "7-5-6", text: "<strong>Monitoring</strong>: Prometheus + Grafana" }
                ]
            },
            {
                title: "Tuần 28: Thực Hành CI/CD",
                icon: "💻",
                type: "practice",
                tasks: [
                    { id: "7-6-1", text: "Setup GitHub Actions pipeline cho E-Commerce API" },
                    { id: "7-6-2", text: "Deploy lên cloud (Railway/Render)" },
                    { id: "7-6-3", text: "Setup monitoring dashboard" }
                ]
            }
        ]
    }
];

// ── State Management ──────────────────────────
const STORAGE_KEY = "java-roadmap-tracker";
const STREAK_KEY = "java-roadmap-streak";

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
}

function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateStreak();
}

function loadStreak() {
    try {
        const saved = localStorage.getItem(STREAK_KEY);
        return saved ? JSON.parse(saved) : { lastDate: null, count: 0 };
    } catch { return { lastDate: null, count: 0 }; }
}

function updateStreak() {
    const streak = loadStreak();
    const today = new Date().toISOString().split("T")[0];

    if (streak.lastDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (streak.lastDate === yesterday) {
        streak.count++;
    } else if (streak.lastDate !== today) {
        streak.count = 1;
    }
    streak.lastDate = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    renderStreakDisplay();
}

function renderStreakDisplay() {
    const streak = loadStreak();
    const el = document.getElementById("streakDays");
    if (el) el.textContent = `${streak.count} ngày`;
}

// ── Rendering ─────────────────────────────────
let state = loadState();
let expandedPhases = new Set(["phase-1"]);
let activeNavPhase = null;

function getAllTasks() {
    const tasks = [];
    ROADMAP.forEach(phase => {
        phase.sections.forEach(section => {
            section.tasks.forEach(task => tasks.push(task.id));
        });
    });
    return tasks;
}

function getPhaseProgress(phase) {
    let total = 0, done = 0;
    phase.sections.forEach(s => {
        s.tasks.forEach(t => {
            total++;
            if (state[t.id]) done++;
        });
    });
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function getSectionProgress(section) {
    let total = 0, done = 0;
    section.tasks.forEach(t => {
        total++;
        if (state[t.id]) done++;
    });
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function getTotalProgress() {
    const all = getAllTasks();
    const done = all.filter(id => state[id]).length;
    return { total: all.length, done, pct: all.length > 0 ? Math.round((done / all.length) * 100) : 0 };
}

function renderProgressRing(pct, color, size = 44, strokeWidth = 3.5) {
    const r = (size - strokeWidth * 2) / 2;
    const circumference = 2 * Math.PI * r;
    const offset = circumference * (1 - pct / 100);
    return `
        <div class="phase-progress-ring" style="width:${size}px;height:${size}px;">
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <circle class="ring-bg" cx="${size/2}" cy="${size/2}" r="${r}" 
                    fill="none" stroke-width="${strokeWidth}"/>
                <circle class="ring-fill" cx="${size/2}" cy="${size/2}" r="${r}" 
                    fill="none" stroke="${color}" stroke-width="${strokeWidth}"
                    stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
                    stroke-linecap="round"/>
            </svg>
            <span class="phase-progress-text">${pct}%</span>
        </div>
    `;
}

function renderPhaseNav() {
    const nav = document.getElementById("phaseNav");
    nav.innerHTML = ROADMAP.map(phase => {
        const prog = getPhaseProgress(phase);
        const isActive = activeNavPhase === phase.id;
        return `
            <button class="phase-nav-btn ${isActive ? 'active' : ''}" 
                data-phase="${phase.id}"
                style="--btn-color:${phase.color};--btn-glow:${phase.color}22;">
                <span>${phase.icon}</span>
                <span>Phase ${phase.phase}</span>
                <span class="nav-progress">${prog.pct}%</span>
            </button>
        `;
    }).join("");

    nav.querySelectorAll(".phase-nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const phaseId = btn.dataset.phase;
            activeNavPhase = activeNavPhase === phaseId ? null : phaseId;

            if (activeNavPhase) {
                expandedPhases.add(phaseId);
            }

            renderPhaseNav();
            renderPhases();

            if (activeNavPhase) {
                const el = document.getElementById(phaseId);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

function renderPhases() {
    const container = document.getElementById("phasesContainer");
    const phasesToRender = activeNavPhase
        ? ROADMAP.filter(p => p.id === activeNavPhase)
        : ROADMAP;

    container.innerHTML = phasesToRender.map((phase, idx) => {
        const prog = getPhaseProgress(phase);
        const isExpanded = expandedPhases.has(phase.id);

        return `
            <div class="phase-card ${isExpanded ? 'expanded' : ''}" id="${phase.id}" 
                style="animation-delay: ${idx * 0.08}s;">
                <div class="phase-header" data-phase="${phase.id}">
                    <div class="phase-number" style="background:${phase.color}22;color:${phase.color};border:1px solid ${phase.color}33;">
                        ${phase.phase}
                    </div>
                    <div class="phase-info">
                        <div class="phase-title">${phase.icon} ${phase.title}</div>
                        <div class="phase-meta">
                            <span>⏱ ${phase.duration}</span>
                            <span>📊 ${phase.level}</span>
                            <span>✅ ${prog.done}/${prog.total}</span>
                        </div>
                    </div>
                    <div class="phase-stats">
                        ${renderProgressRing(prog.pct, phase.color)}
                    </div>
                    <div class="phase-toggle">▼</div>
                </div>
                <div class="phase-body">
                    <div class="phase-body-inner">
                        ${phase.sections.map(section => renderSection(section, phase.color)).join("")}
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Add event listeners
    container.querySelectorAll(".phase-header").forEach(header => {
        header.addEventListener("click", () => {
            const phaseId = header.dataset.phase;
            if (expandedPhases.has(phaseId)) {
                expandedPhases.delete(phaseId);
            } else {
                expandedPhases.add(phaseId);
            }
            renderPhases();
        });
    });

    container.querySelectorAll(".task-item").forEach(item => {
        item.addEventListener("click", () => {
            const taskId = item.dataset.taskId;
            toggleTask(taskId, item);
        });
    });
}

function renderSection(section, color) {
    const prog = getSectionProgress(section);
    const typeClass = section.type === "practice" ? "practice" : "knowledge";

    return `
        <div class="section ${typeClass}">
            <div class="section-title">
                <span class="section-icon">${section.icon}</span>
                ${section.title}
                <span class="section-progress">${prog.done}/${prog.total}</span>
            </div>
            ${section.tasks.map(task => renderTask(task)).join("")}
        </div>
    `;
}

function renderTask(task) {
    const isDone = state[task.id] || false;
    return `
        <div class="task-item ${isDone ? 'completed' : ''}" data-task-id="${task.id}">
            <div class="task-checkbox">
                <span class="check-icon">✓</span>
            </div>
            <span class="task-label">${task.text}</span>
        </div>
    `;
}

function toggleTask(taskId, element) {
    state[taskId] = !state[taskId];
    saveState(state);

    if (state[taskId]) {
        element.classList.add("just-completed");
        setTimeout(() => element.classList.remove("just-completed"), 500);
    }

    renderAll();
    checkMilestones();
}

function renderStats() {
    const total = getTotalProgress();
    document.getElementById("totalProgress").textContent = `${total.pct}%`;
    document.getElementById("totalDone").textContent = `${total.done}/${total.total}`;
    document.getElementById("totalProgressBar").style.width = `${total.pct}%`;
    renderStreakDisplay();
}

function renderAll() {
    renderStats();
    renderPhaseNav();
    renderPhases();
}

// ── Milestones ────────────────────────────────
const MILESTONES = [
    { pct: 10, emoji: "🌟", title: "Khởi Đầu Tuyệt Vời!", desc: "Bạn đã hoàn thành 10% lộ trình. Hành trình vạn dặm bắt đầu từ bước chân đầu tiên!" },
    { pct: 25, emoji: "🎯", title: "1/4 Đường Rồi!", desc: "25% completed! Nền tảng Java Core đang dần vững chắc." },
    { pct: 50, emoji: "🔥", title: "Nửa Chặng Đường!", desc: "50%! Bạn đã đi được nửa đường. Keep going!" },
    { pct: 75, emoji: "💪", title: "Sắp Tới Đích!", desc: "75%! Bạn gần như là một Java Backend Developer rồi!" },
    { pct: 100, emoji: "🏆", title: "HOÀN THÀNH!!", desc: "100%! Incredible! Bạn đã master Java Backend Roadmap! 🎉🎉🎉" }
];

let shownMilestones = new Set(JSON.parse(localStorage.getItem("milestones-shown") || "[]"));

function checkMilestones() {
    const total = getTotalProgress();
    const milestone = MILESTONES.find(m => total.pct >= m.pct && !shownMilestones.has(m.pct));
    if (milestone) {
        shownMilestones.add(milestone.pct);
        localStorage.setItem("milestones-shown", JSON.stringify([...shownMilestones]));
        showMilestone(milestone);
        if (milestone.pct >= 25) spawnConfetti();
    }
}

function showMilestone(milestone) {
    const overlay = document.createElement("div");
    overlay.className = "milestone-overlay";
    overlay.innerHTML = `
        <div class="milestone-card">
            <div class="milestone-emoji">${milestone.emoji}</div>
            <div class="milestone-title">${milestone.title}</div>
            <div class="milestone-desc">${milestone.desc}</div>
            <button class="milestone-close">Tiếp tục học! 🚀</button>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector(".milestone-close").addEventListener("click", () => {
        overlay.style.animation = "fadeIn 0.3s ease reverse forwards";
        setTimeout(() => overlay.remove(), 300);
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.animation = "fadeIn 0.3s ease reverse forwards";
            setTimeout(() => overlay.remove(), 300);
        }
    });
}

function spawnConfetti() {
    const container = document.createElement("div");
    container.className = "confetti-container";
    document.body.appendChild(container);

    const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444", "#06b6d4", "#ec4899"];
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 2 + "s";
        piece.style.animationDuration = (2 + Math.random() * 2) + "s";
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = (6 + Math.random() * 8) + "px";
        container.appendChild(piece);
    }
    setTimeout(() => container.remove(), 4000);
}

// ── Toast ─────────────────────────────────────
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-out");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ── Export / Import / Reset ───────────────────
document.getElementById("btnExport").addEventListener("click", () => {
    const data = {
        state,
        streak: loadStreak(),
        milestones: [...shownMilestones],
        exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `java-roadmap-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("📤 Đã export tiến độ thành công!");
});

document.getElementById("btnImport").addEventListener("click", () => {
    document.getElementById("importFile").click();
});

document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const data = JSON.parse(ev.target.result);
            if (data.state) {
                state = data.state;
                saveState(state);
            }
            if (data.streak) {
                localStorage.setItem(STREAK_KEY, JSON.stringify(data.streak));
            }
            if (data.milestones) {
                shownMilestones = new Set(data.milestones);
                localStorage.setItem("milestones-shown", JSON.stringify(data.milestones));
            }
            renderAll();
            showToast("📥 Đã import tiến độ thành công!");
        } catch {
            showToast("❌ File không hợp lệ!", "error");
        }
    };
    reader.readAsText(file);
    e.target.value = "";
});

document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("⚠️ Bạn có chắc muốn reset toàn bộ tiến độ? Hành động này không thể hoàn tác!")) {
        state = {};
        shownMilestones = new Set();
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STREAK_KEY);
        localStorage.removeItem("milestones-shown");
        renderAll();
        showToast("🔄 Đã reset toàn bộ tiến độ!", "warning");
    }
});

// ── Initialize ────────────────────────────────
renderAll();
