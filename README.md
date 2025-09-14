# Synera - AI-Powered Internal Talent Mobility Platform

Synera (Synergy + Era) is a comprehensive B2B SaaS platform that transforms internal talent mobility through AI-powered career pathways, skills mapping, and intelligent opportunity matching.

## 🚀 Features

### For Employees
- **Skills Profile Management**: Self-assess and track skill proficiency levels
- **AI Career Recommendations**: Get personalized career path suggestions based on skills and transition probabilities
- **Internal Opportunity Board**: Browse and apply to roles, gigs, mentorships, and rotations
- **Learning Path Integration**: Receive targeted learning recommendations to close skill gaps

### For Managers
- **Team Readiness Dashboard**: View team capabilities and development opportunities
- **Opportunity Posting**: Create gigs, rotations, and mentorship opportunities
- **Employee Development**: Approve career paths and nominate team members

### For HR/Admins
- **Data Import/Export**: CSV-based bulk data management
- **Skills Ontology Management**: Define and maintain organizational skill frameworks
- **Analytics Dashboard**: Track mobility metrics, retention, and ROI
- **Multi-tenant Architecture**: Secure, scalable organization isolation

## 🏗️ Architecture

### Frontend
- **Framework**: React + TypeScript (Vite for marketing site)
- **UI**: TailwindCSS with custom design system
- **State Management**: React hooks and context
- **Routing**: React Router for SPA navigation

### Backend (Planned)
- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL (relational) + Neo4j (graph)
- **Cache**: Redis for sessions and hot queries
- **Auth**: Multi-tenant with RBAC (OrgAdmin, Manager, Employee, ReadOnly)

### AI Engine
- **Approach**: Hybrid rule-based + probabilistic system
- **Similarity**: Jaccard similarity over skill sets
- **Transitions**: Markov-style priors for role transitions
- **Scoring**: `score = α * jaccard + (1 - α) * prior` (α = 0.6)

## 📁 Project Structure

```
synera/
├── src/                    # Marketing website (React/Vite)
│   ├── components/         # Website components
│   ├── pages/             # Website pages
│   └── App.tsx            # Main website app
├── app/                   # SaaS Application
│   ├── components/        # App components (Dashboard, Skills, etc.)
│   ├── pages/            # App pages
│   ├── lib/              # API client and utilities
│   └── types/            # TypeScript type definitions
├── api/                  # Backend API (Express/TypeScript)
│   ├── routes/           # API route handlers
│   ├── services/         # Business logic (recommendation engine)
│   └── server.ts         # Express server
└── docs/                 # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd synera
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Marketing website: http://localhost:5173
   - SaaS application: http://localhost:5173/app

### Running the API (Optional)
```bash
# Install API dependencies
npm install --prefix api

# Start API server
npm run dev --prefix api
```

## 🎯 Core Workflows

### Employee Journey
1. **Onboarding**: Complete skills profile with proficiency ratings
2. **Discovery**: View AI-generated career path recommendations
3. **Development**: Access learning resources for skill gaps
4. **Application**: Apply to internal opportunities
5. **Growth**: Track progress and update skills

### Manager Journey
1. **Team Overview**: Review team readiness and capabilities
2. **Opportunity Creation**: Post gigs, rotations, mentorships
3. **Development Support**: Approve employee career paths
4. **Talent Pipeline**: Nominate employees for opportunities

### Admin Journey
1. **Data Setup**: Import users, roles, and skills via CSV
2. **Ontology Management**: Define skill categories and role families
3. **Analytics**: Monitor mobility metrics and platform adoption
4. **Configuration**: Set transition rules and approval workflows

## 🧠 AI Recommendation Engine

The recommendation engine uses a hybrid approach combining:

1. **Skill Similarity**: Jaccard index between user skills and role requirements
2. **Transition Priors**: Historical probability of role transitions
3. **Gap Analysis**: Identification of missing skills and learning paths
4. **Explainability**: Clear explanations for each recommendation

### Algorithm Steps
1. Load user skills and current role
2. Enumerate candidate roles by family/adjacency
3. Calculate Jaccard similarity for each candidate
4. Apply transition priors from historical data
5. Combine scores and rank recommendations
6. Generate explanations and learning suggestions

## 📊 Key Metrics

### Activation
- % employees with completed profiles (14 days)
- Manager adoption rate

### Mobility
- Internal applications per employee
- Internal fill percentage
- Lateral vs vertical moves

### Development
- Average skills gap closed per quarter
- Time-to-competency by role family

### Engagement
- Weekly/Monthly active users
- Path view → apply conversion
- Path usefulness ratings

### Business Impact
- Retention improvement in pilot cohorts
- Recruiting cost savings
- Time-to-fill reduction

## 🔒 Security & Compliance

- **Multi-tenancy**: Row-level isolation by tenant_id
- **Authentication**: SAML/OIDC integration with MFA
- **Authorization**: Role-based access control (RBAC)
- **Data Privacy**: GDPR/CCPA compliance with consent management
- **Encryption**: PII encrypted at rest and in transit
- **Audit Logging**: Complete activity tracking

## 🗺️ Roadmap

### Phase 1 (MVP - 90 days)
- [x] Marketing website with high-converting design
- [x] Core SaaS application structure
- [x] Skills profile management
- [x] Basic recommendation engine
- [x] Opportunity board
- [x] Admin panel foundation

### Phase 2 (6 months)
- [ ] Backend API implementation (NestJS)
- [ ] Database schema and migrations
- [ ] CSV import/export functionality
- [ ] Advanced analytics dashboard
- [ ] Learning management integration

### Phase 3 (12 months)
- [ ] Machine learning enhancements
- [ ] HRIS/LMS integrations
- [ ] Mobile responsiveness optimization
- [ ] Advanced reporting and exports
- [ ] SOC2 Type II compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions:
- Email: support@synera.com
- Documentation: [docs.synera.com](https://docs.synera.com)
- Status Page: [status.synera.com](https://status.synera.com)

---

**Synera** - Empowering talent journeys through intelligent career development.